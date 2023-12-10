import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { SIZING } from '@/library/theme'
import { COLORS } from '@/library/theme'
import Image from 'next/image'
import AvalancheLogo from '@/public/images/AvalancheLogo.webp'
import { useStateContext } from '@/context/StateContext';
import PromptCard from './PromptCard'

const NFTCard = ({ nft }) => {

  const { selectedNFT, setSelectedNFT, showBuyModal, setShowBuyModal} = useStateContext();

  const [ showPromptCard, setShowPromptCard ] = useState(false)
  const [isOwnerTextOverflowed, setIsOwnerTextOverflowed] = useState(false)

  const ownerRef = useRef(null)

  useEffect(() => {
    const checkOverflow = () => {
      const isOverflowed = ownerRef.current.scrollWidth > ownerRef.current.clientWidth;
      setIsOwnerTextOverflowed(isOverflowed);
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  return (
    <Card>

      {!showPromptCard &&
      <>
      <ImageContainer>
        <Owner ref={ownerRef} isOverflowed={isOwnerTextOverflowed}>
          @{nft.owner}
        </Owner>
        <Image src={nft.image} alt={nft.name} layout="responsive" />
      </ImageContainer>

      <BottomContainer>

        <NFTCardName>{nft.name}</NFTCardName>

        {!nft.ownsNFT && (
          <PriceRow>
            <NFTCardPrice>{nft.price}</NFTCardPrice>
            <AVAXRow>
              <NFTCardAVAXSpan>AVAX</NFTCardAVAXSpan>
              <Image src={AvalancheLogo} alt="Avalanche" />
            </AVAXRow>
          </PriceRow>
        )}

        {nft.ownsNFT && 
            <OwnerSpan>
                Owner
            </OwnerSpan>
        } 

        <ButtonRow>
            {nft.ownsNFT && (
            <ViewPromptButton onClick={() => {setSelectedNFT(nft); setShowPromptCard(true)}} >
              View prompt
            </ViewPromptButton>
            )}
            {!nft.ownsNFT && 
            <BuyButton onClick={() => {setSelectedNFT(nft); setShowBuyModal(true);}}>
              Buy
            </BuyButton>
            }
        </ButtonRow>

      </BottomContainer>
      </>
      }
    
      <PromptCard
        showPromptCard={showPromptCard}
        setShowPromptCard={setShowPromptCard}
        selectedNFT={selectedNFT}
      />

    </Card>
  )
}

const Card = styled.article`
display: flex;
position: relative;
flex-direction: column;
flex: 1 0 calc(20% - ${SIZING.px24});
max-width: 20%;
border-radius: ${SIZING.px8};
backdrop-filter: blur(${SIZING.px8});
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.2),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.2);
overflow: clip;
transition: 0.2s ease-in-out;

&:hover{
transform: scale(0.99);
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.1),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.1);
}
`
const ImageContainer = styled.div`
display: flex;
position: relative;
width: 100%;
border-bottom: ${SIZING.px2} solid rgba(255, 251, 254, 0.5);
transition: 0.2s ease-in-out;


img{
width: 100%;
aspect-ratio: 1 / 1;
object-fit: cover;
object-position: top;
opacity: 0.9;
transition: 0.2s ease-in-out;
}

&:hover{
border-bottom: ${SIZING.px2} solid rgba(255, 251, 254, 0.2);
img{
opacity: 1;
}
}
`
const BottomContainer = styled.div`
display: flex;
flex-direction: column;
padding: ${SIZING.px12};
background-color: rgba(255, 251, 254, 0.25);
`
const ButtonRow = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: ${SIZING.px8};
`
const PriceRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: ${SIZING.px8};
margin-bottom: ${SIZING.px16};
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
const Owner = styled.div`
display: flex;
position: absolute;
max-width: 80%;
top: ${SIZING.px12};
left: ${SIZING.px12};
padding: ${SIZING.px4};
background-color: rgba(215, 209, 215, 0.7);
backdrop-filter: blur(${SIZING.px2});
border-radius: ${SIZING.px2};
font-size: ${SIZING.px12};
letter-spacing: -0.02rem;
font-family: "Haskoy Bold";
color: ${COLORS.Black900Default};
white-space: nowrap;

${({ isOverflowed }) => ({
  WebkitMaskImage: isOverflowed
    ? 'linear-gradient(to right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)'
    : 'none',
  maskImage: isOverflowed
    ? 'linear-gradient(to right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)'
    : 'none',
})}

z-index: 1;
overflow-x: scroll;
`
const BuyButton = styled.button`
width: 100%;
padding: ${SIZING.px12} 0;
font-size: ${SIZING.px18};
letter-spacing: -0.02rem;
font-family: "Haskoy Extra Bold";
color: ${COLORS.StandardWhiteDefault};
border: none;
outline: none;
border-radius: ${SIZING.px4};
background-color: rgba(52, 35, 166, 0.85);
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
letter-spacing: 0.02rem;
background-color: rgba(52, 35, 166, 1);
}
`
const ViewPromptButton = styled.button`
width: 100%;
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
background-color: rgba(255, 251, 254, 0.1);
}
`
const NFTCardName = styled.h1`
max-width: 90%;
line-height: 110%;
font-size: ${SIZING.px24};
letter-spacing: -0.05rem;
font-family: "Haskoy Extra Bold";
color: ${COLORS.StandardWhiteDefault};
overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;
-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
`
const NFTCardPrice = styled.span`
font-size: ${SIZING.px16};
letter-spacing: -0.05rem;
font-family: "Haskoy Bold";
color: ${COLORS.StandardWhiteDefault};
`
const NFTCardAVAXSpan = styled.span`
font-size: ${SIZING.px16};
letter-spacing: -0.05rem;
font-family: "Haskoy Medium";
color: ${COLORS.StandardWhiteDefault};
`
const OwnerSpan = styled.span`
text-align: center;
margin-top: ${SIZING.px8};
margin-bottom: ${SIZING.px16};
letter-spacing: -0.02rem;
font-size: ${SIZING.px16};
font-family: "Haskoy Medium";
color: rgba(255, 251, 254, 0.6);
`

export default NFTCard