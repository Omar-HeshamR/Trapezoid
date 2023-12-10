import React from 'react'
import styled from 'styled-components'
import { SIZING } from '@/library/theme'
import CreatingNFTLoader from '../Loaders/CreateNFTLoader'

const InitialImageGenerationLoad = () => {
  return (
    <Section>

        <CreatingNFTLoader />

        <CreatingImageSpan>
          Generating your image...
        </CreatingImageSpan>

    </Section>
    )
}

const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
border: 1px solid rgba(255, 251, 254, 0.1);
border-radius: ${SIZING.px8};
background-color: rgba(255, 251, 254, 0.05);
backdrop-filter: blur(${SIZING.px32});
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.05),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.05);
z-index: 2;
}
`
const CreatingImageSpan = styled.span`
margin-top: ${SIZING.px32};
font-size: ${SIZING.px32};
letter-spacing: -0.1rem;
font-family: "Haskoy Bold";
color: rgba(255, 251, 254, 0.9);
`

export default InitialImageGenerationLoad