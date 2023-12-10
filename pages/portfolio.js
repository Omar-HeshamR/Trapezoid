import React, { useEffect, useState } from 'react'
import TopBar from '@/components/TopBar/TopBar'
import {Section, ScrollableContainer, CardGrid, DarkOverlay} from '@/library/theme'
import CardGridLoader from '@/components/Loaders/CardGridLoader'
import NFTCard from '@/components/Card/NFTCard'
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner'
import TRAPEZOIDABI from '@/library/TrapezoidABI.json'
import { useStateContext } from '@/context/StateContext.js'
import { useStorage } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import toast from 'react-hot-toast'

const Portfolio = () => {
 
  const { signer, Trapezoid_contract_address, connectedAddress } = useStateContext();
  const [ nfts, setNfts ] = useState([])  
  const [ loading, setLoading ] = useState(true);
  const storage = useStorage();

  useEffect(() => {
    const asyncFunc = async () => {
      if(!signer){
        toast.error(`Connect Wallet to Fuji C-chain to see NFTs!`)
        setLoading(false)
        return
      }
      try{const contract = new ethers.Contract(Trapezoid_contract_address, TRAPEZOIDABI, signer);
      const tokenURIs = await contract.getAllTokenURIs(); // Replace with your contract's method
      const dataPromises = tokenURIs.map(async (uri, index) => {
        const data = await storage.download(uri);
        const metadataResponse = await fetch(data.url);
        const ownersList = await contract.getOwners(index);
        const finalNFT = await metadataResponse.json()
        finalNFT.owners = ownersList
        finalNFT.isMaker = finalNFT.artist == connectedAddress;
        finalNFT.isOwner = ownersList.some(owner => owner.toLowerCase() === connectedAddress.toLowerCase());
        return finalNFT;
      });
      const allNFTs  = await Promise.all(dataPromises);
      setNfts(allNFTs );
      console.log(allNFTs)
      setLoading(false)
    }catch(err){console.log(err)}
  }
  asyncFunc()
  }, [signer])

  
return (
  <Section>

    <ScrollableContainer>

      <TopBar portfolio/>

        {loading ? (
          <>
          {!signer && <div>Please connect wallet</div>}
          <CardGridLoader />
          </>
        ) : (
       <>
        {!signer && <div>Please connect wallet</div>}

        <CardGrid>
        <PortfolioBanner nfts={nfts}/>
            {nfts && nfts.map((nft, index) => (
              <NFTCard
                key={index}
                nft={nft}
              />
            ))}

        </CardGrid>
        </>
      )}

    </ScrollableContainer>

    <DarkOverlay />

  </Section>
)
}

 
export default Portfolio