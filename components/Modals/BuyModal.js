import React, {useState} from 'react'
import styled from 'styled-components'
import { SIZING } from '@/library/theme'
import { COLORS } from '@/library/theme'
import { useStateContext } from '@/context/StateContext';
import { MdClose } from "react-icons/md";
import StyledLoader from '@/components/Loaders/StyledLoader'
import Image from 'next/image';

const BuyModal = () => {

  const { showBuyModal, setShowBuyModal, selectedNFT, setSelectedNFT } = useStateContext();
  const [ isLoading, setIsLoading ] = useState(true)
  const [ showSuccess, setShowSuccess ] = useState(false) 


  return (
    <>
      {showBuyModal &&

        <Background>

          <ModalBody>

            <TopBanner>
            {isLoading ? (
              <>
                Buying {selectedNFT?.name}...
              </>
            ) : showSuccess ? (
              <>
                Successful Purchase
              </>
            ) : (
              <div>ERROR</div>
            )}

              <CloseIcon onClick={() => setShowBuyModal(false)} />
            </TopBanner>

            <BottomContainer>

            {isLoading ? (
              <>
                <StyledLoader />
              </>
            ) : showSuccess ? (
              <>
              <Image src={selectedNFT?.image} alt={selectedNFT?.name}/>
              You have successfully purchased {selectedNFT?.name}!
              </>
            ) : (
              <div>ERROR</div>
            )}

            </BottomContainer>

          </ModalBody>

        </Background>

      }
    </>
  )
}

const Background = styled.section`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(8, 7, 8, 0.8);
z-index: 10;
`
const ModalBody = styled.div`
display: flex;
flex-direction: column;
width: ${SIZING.px480};
border-radius: ${SIZING.px4};
overflow: clip;
z-index: 11;
transition: 0.2s ease-in-out;
`
const TopBanner = styled.div`
display: flex;
align-items: center;
padding: ${SIZING.px24} ${SIZING.px32};
justify-content: space-between;
font-size: ${SIZING.px24};
color: ${COLORS.StandardWhiteDefault};
letter-spacing: -0.04rem;
font-family: "Haskoy Bold";
background-color: rgba(255, 251, 254, 0.3);
backdrop-filter: blur(${SIZING.px4});
border-bottom: 2px solid rgba(255, 251, 254, 0.1);
`
const CloseIcon = styled(MdClose)`
font-size: ${SIZING.px24};
fill: ${COLORS.Black100};
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
fill: ${COLORS.StandardWhiteDefault};
}
`
const BottomContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
gap: ${SIZING.px24};
padding: ${SIZING.px24} ${SIZING.px32};
letter-spacing: -0.04rem;
font-size: ${SIZING.px24};
color: ${COLORS.StandardWhiteDefault};
font-family: "Haskoy Semibold";
background-color: rgba(255, 251, 254, 0.3);
backdrop-filter: blur(${SIZING.px4});

img{
width: calc(${SIZING.px480} - ${SIZING.px48});
height: calc(${SIZING.px480} - ${SIZING.px48});
object-fit: cover;
object-position: top;
border-radius: ${SIZING.px4};
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
`

export default BuyModal