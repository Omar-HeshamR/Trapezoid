pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Trapezoid is ERC721, ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    address public TrapezoidAdmin;

    constructor() ERC721("Trapezoid Art Prompts", "TRAPEZOID") {
        TrapezoidAdmin = msg.sender;
    }

    mapping(uint256 => uint256) nftPrice;
    mapping(uint256 => address[]) public owners;

    function mintNFT(string memory uri, uint256 price) public {
        uint256 tokenId = _tokenIdCounter.current(); 
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        owners[tokenId].push(msg.sender);
        nftPrice[tokenId] = price;
        _tokenIdCounter.increment();
    }

   function buyNFT(uint256 tokenId) public payable {
        require(msg.value >= nftPrice[tokenId], "Insufficient funds sent");
        require(tokenId <= _tokenIdCounter.current(), "NFT does not exist");
        uint256 fee = msg.value / 300; // 3% fee
        uint256 payment = msg.value - fee;

        // Transfer the fee to the contract owner
        payable(TrapezoidAdmin).transfer(fee);

        // Transfer the payment to the current owner of the NFT
        payable(ownerOf(tokenId)).transfer(payment);

        // Transfer the NFT to the buyer
        _transfer(ownerOf(tokenId), msg.sender, tokenId);

        owners[tokenId].push(msg.sender);
    }

    function verifyOwner(uint256 tokenId) public view returns (bool) {
        for (uint i = 0; i < owners[tokenId].length; i++) {
            if (owners[tokenId][i] == msg.sender) {
                return true;
            }
        }
        return false;
    }

    function getAllTokenURIs() public view returns (string[] memory) {
        uint256 totalTokens = _tokenIdCounter.current();
        string[] memory uris = new string[](totalTokens);
        for (uint256 i = 0; i < totalTokens; i++) {
            if (ownerOf(i) != address(0)) {
                uris[i] = tokenURI(i);
            }
        }
        return uris;
    }

    function getOwners(uint256 key) public view returns (address[] memory) {
        return owners[key];
    }

    // OVERRIDES

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }



}
