import React, { useState } from 'react'
import {Section, ScrollableContainer, CardGrid, DarkOverlay} from '@/library/theme'
import TopBar from '@/components/TopBar/TopBar'
import CardGridLoader from '@/components/Loaders/CardGridLoader'
import NFTCard from '@/components/Card/NFTCard'
import NFT1 from '@/public/images/NFT1.jpg'
import NFT2 from '@/public/images/NFT2.jpg'
import NFT3 from '@/public/images/NFT3.jpg'
import NFT4 from '@/public/images/NFT4.jpg'
import NFT5 from '@/public/images/NFT5.jpg'
import NFT6 from '@/public/images/NFT6.jpg'
import NFT7 from '@/public/images/NFT7.jpg'
import NFT8 from '@/public/images/NFT8.jpg'
import NFT9 from '@/public/images/NFT9.jpg'
import NFT10 from '@/public/images/NFT10.jpg'
import NFT11 from '@/public/images/NFT11.jpg'
import NFT12 from '@/public/images/NFT12.jpg'
import NFT13 from '@/public/images/NFT13.jpg'
import NFT14 from '@/public/images/NFT14.jpg'
import NFT15 from '@/public/images/NFT15.jpg'


const Marketplace = () => {

  const [ loadingMarketplace, setLoadingMarketplace ] = useState(false);

  const nftObjects = [
    {
      owner: 'hello hello hi how are you doing wjdijdw wijdwijdij',
      image: NFT1,
      name: 'hwllo hello hi how are you doing today lmao',
      price: '45.67',
      ownsNFT: true,
    },
    {
      owner: 'QuantumJaguar19',
      image: NFT2,
      name: 'Moon Jelly #502',
      price: '12.34',
      ownsNFT: false,
    },
    {
      owner: 'MysticPhoenix56',
      image: NFT3,
      name: 'TechTiger #169',
      price: '9.99',
      ownsNFT: true,
    },
    {
      owner: 'NebulaElephant42',
      image: NFT4,
      name: 'NeonNova #845',
      price: '14.91',
      ownsNFT: false,
    },
    {
      owner: 'CelestialLynx23',
      image: NFT5,
      name: 'Star Dust X #276',
      price: '2.85',
      ownsNFT: true,
    },
    {
      owner: 'CelestialLynx23',
      image: NFT6,
      name: 'Crypto Sphinx #613',
      price: '3.11',
      ownsNFT: false,
    },
    {
      owner: 'InfiniteTiger15',
      image: NFT7,
      name: 'Sky Sail #419',
      price: '3.17',
      ownsNFT: true,
    },
    {
      owner: 'ZenithDragon37',
      image: NFT8,
      name: 'Zen Grid #987',
      price: '4.80',
      ownsNFT: false,
    },
    {
      owner: 'AuroraKangaroo64',
      image: NFT9,
      name: 'Byte Burst #124',
      price: '10.11',
      ownsNFT: true,
    },
    {
      owner: 'GalaxyZebra91',
      image: NFT10,
      name: 'PrismPaw #555',
      price: '10.11',
      ownsNFT: true,
    },
    {
      owner: 'EnigmaLion28',
      image: NFT11,
      name: 'DataDrip #367',
      price: '10.11',
      ownsNFT: true,
    },
    {
      owner: 'SolarBear49',
      image: NFT12,
      name: 'CyberSway #811',
      price: '10.11',
      ownsNFT: true,
    },{
      owner: 'SerenityWolf72',
      image: NFT13,
      name: 'Nova Nectar #233',
      price: '10.11',
      ownsNFT: true,
    },{
      owner: 'NebulaOtter53',
      image: NFT14,
      name: 'Quasar Quill #690',
      price: '10.11',
      ownsNFT: true,
    },{
      owner: 'AstralHawk11',
      image: NFT15,
      name: 'FluxFlicker #147',
      price: '10.11',
      ownsNFT: true,
    },
  ];
  
  return (
    <Section>

      <ScrollableContainer>

        <TopBar marketplace/>

        {loadingMarketplace ? (
          <CardGridLoader />
        ) : (
          <CardGrid>
            {nftObjects.map((nft, index) => (
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