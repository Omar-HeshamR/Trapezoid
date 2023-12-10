import React from 'react'
import styled, { keyframes } from 'styled-components'
import { SIZING } from '@/library/theme'
import { COLORS } from '@/library/theme'
import CardSlider from './CardSlider.js'
import HeroNavbar from './HeroNavbar.js'
import { useRouter } from 'next/router'


const Hero = () => {

  const router = useRouter()

  function goToMarketplace() {
    router.push("/marketplace")
  }

  function goToCreateNFT() {
    router.push("/create-NFT")
  }

  return (
    <Section>

        <HeroNavbar />

        <FixedContainer>

            <LeftHalf>

                <HeroHeader>
                  Generate awesome NFTs using
                  <LetterSpacingSpan>
                    &nbsp;generative AI
                  </LetterSpacingSpan>
                </HeroHeader>

                <HeroSubheader>
                  Join Trapezoid to create breathtaking NFTs
                  in literally seconds. 
                </HeroSubheader>

                <ButtonRow>
                  <CTAButton onClick={goToMarketplace}>
                    View marketplace
                  </CTAButton>
                  <CTAButton onClick={goToCreateNFT}>
                    Generate an NFT
                  </CTAButton>
                </ButtonRow>

            </LeftHalf>

            <RightHalf>

              <CardSlider />

            </RightHalf>
            
        </FixedContainer>

        <DarkOverlay />
        
    </Section>
  )
}

const Section = styled.section`
display: flex;
flex-direction: column;
height: 100vh;
background-color: ${COLORS.Purple300};
background-image:
radial-gradient(at 21% 77%, hsla(214,83%,71%,1) 0px, transparent 50%),
radial-gradient(at 44% 38%, hsla(308,93%,65%,1) 0px, transparent 50%),
radial-gradient(at 99% 45%, hsla(354,89%,76%,1) 0px, transparent 50%),
radial-gradient(at 47% 0%, hsla(207,95%,78%,1) 0px, transparent 50%),
radial-gradient(at 22% 98%, hsla(159,87%,68%,1) 0px, transparent 50%),
radial-gradient(at 62% 29%, hsla(238,85%,66%,1) 0px, transparent 50%),
radial-gradient(at 20% 5%, hsla(335,74%,64%,1) 0px, transparent 50%);
z-index: 0;
`
const DarkOverlay = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
background-color: rgba(8, 7, 8, 0.1);
z-index: 1;
`
const FixedContainer = styled.div`
display: flex;
height: 89vh;
padding-left: ${SIZING.px64};
padding-right: ${SIZING.px64};
padding-bottom: 11vh;
z-index: 2;
`
const LeftHalf = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
`
const ButtonRow = styled.div`
display: flex;
align-items: center;
margin-top: ${SIZING.px32};
gap: ${SIZING.px8};
`
const CTAButton = styled.button`
padding: ${SIZING.px16} ${SIZING.px24};
font-size: ${SIZING.px16};
font-family: "Haskoy Bold";
color: ${COLORS.StandardWhiteDefault};
border-radius: ${SIZING.px4};
background-color: rgba(255, 251, 254, 0.2);
border: 1px solid rgba(255, 251, 254, 0.4);
outline: none;
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
background-color: rgba(255, 251, 254, 0.1);
}
`
const pulseAnimation = keyframes`
0% {
letter-spacing: -0.1rem;
}
50% {
letter-spacing: -0.095rem;
}
100% {
letter-spacing: -0.1rem;
}
`
const LetterSpacingSpan = styled.span`
font-size: ${SIZING.px56};
letter-spacing: -0.1rem;
font-family: "Haskoy Extra Bold";
color: ${COLORS.StandardWhiteDefault};
animation: ${pulseAnimation} 0.4s infinite; 
`
const RightHalf = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
`
const HeroHeader = styled.h1`
font-size: ${SIZING.px56};
letter-spacing: -0.1rem;
font-family: "Haskoy Extra Bold";
color: ${COLORS.StandardWhiteDefault};
`
const HeroSubheader = styled.h2`
margin-top: ${SIZING.px16};
font-size: ${SIZING.px16};
font-family: "Haskoy Medium";
color: ${COLORS.StandardWhiteDefault};
`

export default Hero