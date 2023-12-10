import React from 'react';
import styled from 'styled-components';
import { SIZING } from '@/library/theme';
import { COLORS } from '@/library/theme';
import Image from 'next/image';
import CardNFT from '@/public/images/CardNFT.webp'
import CardNFT2 from '@/public/images/CardNFT2.webp'
import CardNFT3 from '@/public/images/CardNFT3.webp'
import AvalancheLogo from '@/public/images/AvalancheLogo.webp'
import { useRouter } from 'next/router'

const CardSlider= () => {

  const router = useRouter()

  function goToMarketplace() {
    router.push("/marketplace")
  }

  return (
    <Container>

      <Card>

        <ImageContainer>
          <Image src={CardNFT2} alt="NFT" layout="responsive"/>
        </ImageContainer>

        <CardContent>
          <CardSliderNFTName>
            VaporView #452
          </CardSliderNFTName>

          <PriceRow>
            <CardSliderNFTPrice>
              105.00
            </CardSliderNFTPrice>
            <AVAXRow>
              <CardSliderNFTAVAX>
                AVAX
              </CardSliderNFTAVAX>
              <Image src={AvalancheLogo} alt="Avalanche" />
            </AVAXRow>
          </PriceRow>

          <BuyButton onClick={goToMarketplace}>
            Buy
          </BuyButton>

        </CardContent>

      </Card>

      <Card>

        <ImageContainer>
          <Image src={CardNFT3} alt="NFT" layout="responsive"/>
        </ImageContainer>

        <CardContent>
          <CardSliderNFTName>
            Metro Warriors #151
          </CardSliderNFTName>

          <PriceRow>
            <CardSliderNFTPrice>
              12.50
            </CardSliderNFTPrice>
            <AVAXRow>
              <CardSliderNFTAVAX>
                AVAX
              </CardSliderNFTAVAX>
              <Image src={AvalancheLogo} alt="Avalanche" />
            </AVAXRow>
          </PriceRow>

          <BuyButton onClick={goToMarketplace}>
            Buy
          </BuyButton>
          
        </CardContent>

      </Card>

      <Card>

        <ImageContainer>
          <Image src={CardNFT} alt="NFT" layout="responsive"/>
        </ImageContainer>

        <CardContent>
          <CardSliderNFTName>
            GTA Sims #1951
          </CardSliderNFTName>

          <PriceRow>
            <CardSliderNFTPrice>
              15.00
            </CardSliderNFTPrice>
            <AVAXRow>
              <CardSliderNFTAVAX>
                AVAX
              </CardSliderNFTAVAX>
              <Image src={AvalancheLogo} alt="Avalanche" />
            </AVAXRow>
          </PriceRow>

          <BuyButton onClick={goToMarketplace}>
            Buy
          </BuyButton>
          
        </CardContent>

      </Card>

    </Container>
  );
};

const Container = styled.div`
display: flex;
margin-left: auto;
` 
const Card = styled.article`
display: flex;
flex-direction: column;
gap: ${SIZING.px2};
border-radius: ${SIZING.px8};
background-color: rgba(255, 251, 254, 0.1);
backdrop-filter: blur(${SIZING.px8});
box-shadow: -${SIZING.px8} 0 ${SIZING.px64} rgba(255, 251, 254, 0.5),
-${SIZING.px2} 0 ${SIZING.px16} rgba(8, 7, 8, 0.1);
transition: 0.4s ease-in-out;

&:not(:first-child) {
  margin-left: -${SIZING.px96};
}

&:hover{
transform: translateY(-${SIZING.px36});
margin-right: ${SIZING.px128};
height: fit-content;
gap: 0;
}
`

const ImageContainer =  styled.div`
display: flex;
width: ${SIZING.px224};
height: ${SIZING.px224};
border-top-left-radius: ${SIZING.px8};
border-top-right-radius: ${SIZING.px8};
overflow: clip;

img{
width: 100%;
height: 100%;
object-fit: cover;
opacity: 1;
}
`
const CardContent = styled.div`
display: flex;
flex-direction: column;
padding: ${SIZING.px8};
background-color: rgba(255, 251, 254, 0.1);
border-bottom-left-radius: ${SIZING.px8};
border-bottom-right-radius: ${SIZING.px8};
`
const PriceRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: ${SIZING.px8};
margin-bottom: ${SIZING.px12};
`
const AVAXRow = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px4};

img{
width: ${SIZING.px14};
height: ${SIZING.px14};
}
`
const BuyButton = styled.button`
padding: ${SIZING.px12} 0;
font-size: ${SIZING.px18};
letter-spacing: -0.02rem;
font-family: "Haskoy Extra Bold";
color: ${COLORS.StandardWhiteDefault};
border: none;
outline: none;
border-radius: ${SIZING.px4};
background-color: rgba(255, 251, 254, 0.2);
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
letter-spacing: 0.02rem;
background-color: rgba(255, 251, 254, 0.15);
}
`
const CardSliderNFTName = styled.h1`
font-size: ${SIZING.px18};
letter-spacing: -0.02rem;
font-family: "Haskoy Bold";
color: ${COLORS.StandardWhiteDefault};
`
const CardSliderNFTPrice = styled.span`
font-size: ${SIZING.px14};
letter-spacing: -0.02rem;
font-family: "Haskoy Extra Bold";
color: ${COLORS.StandardWhiteDefault};
`
const CardSliderNFTAVAX = styled.span`
font-size: ${SIZING.px14};
letter-spacing: -0.02rem;
font-family: "Haskoy Medium";
color: ${COLORS.StandardWhiteDefault};
`


export default CardSlider
