import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/theme'

const PortfolioBanner = () => {
  return (
    <Section>
        <WalletAddress>
            0xAbCdEf0123456789AaBbCcDdEfFgHiJkLmNnOpQrStUvWxYz
        </WalletAddress>
        <RightRow>
            <OwnedCreatedSpan>
                329 NFTs owned
            </OwnedCreatedSpan>
            <OwnedCreatedSpan>
                45 NFTs created
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