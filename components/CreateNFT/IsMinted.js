import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/theme'
import Image from 'next/image'

const IsMinted = ({imageGenerated, name}) => {
  return (
    <Section>

        <SuccessSpan>
            Your NFT, {name}, has been successfully minted!
        </SuccessSpan>
        
        <Image src={imageGenerated.url} 

        alt="Generated NFT" width={1000} height={1000}/>

    </Section>
  )
}

const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: calc( ${SIZING.px352} + ${SIZING.px48});
height: fit-content;
margin: 0 auto;
gap: ${SIZING.px24};
padding: ${SIZING.px32};
border: 1px solid rgba(255, 251, 254, 0.1);
border-radius: ${SIZING.px8};
background-color: rgba(255, 251, 254, 0.05);
backdrop-filter: blur(${SIZING.px16});
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.05),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.05);
z-index: 2;

img{
width: ${SIZING.px352};
height: ${SIZING.px352};
border-radius: ${SIZING.px8};
outline: 1px solid rgba(255, 251, 254, 0.4);
opacity: 0.9;
transition: 0.2s ease-in-out;
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.1),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.1);

&:hover{
opacity: 1;
outline: 1px solid rgba(255, 251, 254, 0.2);
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.2),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.2);
}
}

&:hover{
border: 1px solid rgba(255, 251, 254, 0.2);
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.1),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.1);
}
`
const SuccessSpan = styled.span`
width: ${SIZING.px352};
font-size: ${SIZING.px24};
font-family: "Haskoy Bold";
color: ${COLORS.StandardWhiteDefault};
letter-spacing: -0.04rem;
word-wrap: break-word;
`

export default IsMinted