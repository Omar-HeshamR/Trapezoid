import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/theme'
import { useStateContext } from '@/context/StateContext.js'

const PortfolioBanner = ({nfts}) => {
  
  const { connectedAddress } = useStateContext();
  const [totalOwned, setTotalOwned] = useState();
  const [totalCreated, setTotalCreated] = useState();

  useEffect(() => {
    if (nfts && connectedAddress) {
      const owned = nfts.filter(nft => nft.owners.includes(connectedAddress)).length;
      const created = nfts.filter(nft => nft.isMaker).length;

      setTotalOwned(owned);
      setTotalCreated(created);
    }
  }, [nfts, connectedAddress]);

  return (
    <Section>
        <WalletAddress>
            {connectedAddress ? connectedAddress : 'Please connect wallet'}
        </WalletAddress>
        <RightRow>
            <OwnedCreatedSpan>
                {totalOwned ? `${totalOwned} NFTs owned` : 'Loading...'} 
            </OwnedCreatedSpan>
            <OwnedCreatedSpan>
                {totalCreated ? `${totalCreated} NFTs created` : 'Loading...'} 
            </OwnedCreatedSpan>
        </RightRow>
    </Section>
  )
}

const Section = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: ${SIZING.px24};
border-radius: ${SIZING.px4};
background-color: rgba(255, 251, 254, 0.15);
border: 1px solid rgba(255, 251, 254, 0.25);
backdrop-filter: blur(${SIZING.px8});
transition: 0.4s ease-in-out;

&:hover{
background-color: rgba(255, 251, 254, 0.05);
border: 1px solid rgba(255, 251, 254, 0.15);
transform: scale(0.99);
}
`
const WalletAddress = styled.span`
font-size: ${SIZING.px16};
letter-spacing: -0.04rem;
color: rgba(255, 251, 254, 0.9);
`
const RightRow = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px16};
`
const OwnedCreatedSpan = styled.span`
font-size: ${SIZING.px16};
letter-spacing: -0.02rem;
font-family: "Haskoy Semibold";
color: ${COLORS.StandardWhiteDefault};
`

export default PortfolioBanner