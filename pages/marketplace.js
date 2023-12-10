import React, { useEffect, useState } from 'react'
import {Section, ScrollableContainer, CardGrid, DarkOverlay} from '@/library/theme'
import TopBar from '@/components/TopBar/TopBar'
import CardGridLoader from '@/components/Loaders/CardGridLoader'
import NFTCard from '@/components/Card/NFTCard'
import TRAPEZOIDABI from '@/library/TrapezoidABI.json'
import { useStateContext } from '@/context/StateContext.js'
import { useAddress, useSigner, useStorage } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import toast from 'react-hot-toast'

const Marketplace = () => {

  const { Trapezoid_contract_address } = useStateContext();
  const [ nfts, setNfts ] = useState([])
  const [ loadingMarketplace, setLoadingMarketplace ] = useState(true);
  const storage = useStorage();
  const signer = useSigner();
  const connectedAddress = useAddress();

  useEffect(() => {
    const asyncFunc = async () => {
      if(!signer){
        toast.error(`Connect Wallet to Fuji C-chain to see NFTs!`)
        setLoadingMarketplace(false)
        return
      }
      try{
      const contract = new ethers.Contract(Trapezoid_contract_address, TRAPEZOIDABI, signer);
      const tokenURIs = await contract.getAllTokenURIs(); // Replace with your contract's method
      const dataPromises = tokenURIs.map(async (uri, index) => {
        const data = await storage.download(uri);
        const metadataResponse = await fetch(data.url);
        const ownersList = await contract.getOwners(index);
        const finalNFT = await metadataResponse.json()
        finalNFT.owners = ownersList
        finalNFT.isMaker = finalNFT.artist == connectedAddress;
        finalNFT.isOwner = ownersList.some(owner => owner.toLowerCase() === connectedAddress.toLowerCase());
        finalNFT.tokenId = index
        return finalNFT;
      });
      const allNFTs = await Promise.all(dataPromises);
      setNfts(allNFTs);
      console.log(allNFTs)
      setLoadingMarketplace(false)
    }catch(err){console.log(err)}
  }
  asyncFunc()
  }, [signer, connectedAddress])
  
  return (
    <Section>

      <ScrollableContainer>

        <TopBar marketplace/>

        {loadingMarketplace ? (
          <>
            {!signer && <div>Please connect wallet</div>}
            <CardGridLoader />
          </>
        ) : (
          <CardGrid>
            {nfts.map((nft, index) => (
              <NFTCard
                key={index}
                nft={nft}
              />
            ))}
          </CardGrid>
        )}

      </ScrollableContainer>

      <DarkOverlay />

    </Section>
  )
}

export default Marketplace