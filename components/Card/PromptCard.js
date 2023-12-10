import React, { useRef } from 'react'
import styled from 'styled-components'
import { SIZING } from '@/library/theme'
import { COLORS } from '@/library/theme'
import { MdClose } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import toast from 'react-hot-toast'

const PromptCard = ({showPromptCard, setShowPromptCard, selectedNFT}) => {

  const descriptionRef = useRef(null);

  const handleCopy = () => {
    const descriptionText = descriptionRef.current.innerText;

    // Use navigator.clipboard if available, otherwise fallback to document.execCommand('copy')
    if (navigator.clipboard) {
      navigator.clipboard.writeText(descriptionText)
        .then(() => {
          toast.success(`Prompt for ${selectedNFT?.name} copied to clipboard successfully!`)
        })
        .catch((err) => {
          console.error('Error copying to clipboard:', err);
        });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = descriptionText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      alert(`Prompt for ${selectedNFT?.name} copied to clipboard successfully!`);
    }
  };

  return (
    <>
      <Card>

          <TopBanner>
            <NFTName>
              {selectedNFT?.name}
            </NFTName>
              <CloseIcon onClick={() => setShowPromptCard(false)} />
          </TopBanner>

          <BottomContent>

              <Description ref={descriptionRef}>
                  {selectedNFT.prompt}
              </Description>
          
              <CopyButton onClick={handleCopy}>
                  Copy to clipboard
                  <CopyIcon />
              </CopyButton>

          </BottomContent>

      </Card>
    </>
  )
}

const Card = styled.article`
display: flex;
position: absolute;
flex-direction: column;
width: 100%;
height: 100%;
border-radius: ${SIZING.px8};
background-color: rgba(255, 251, 254, 0.05);
outline: 1px solid rgba(255, 251, 254, 0.1);
overflow: clip;
transition: 0.2s ease-in-out;
`
const TopBanner = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: ${SIZING.px16} ${SIZING.px12};
letter-spacing: -0.02rem;
border-bottom: 1px solid rgba(255, 251, 254, 0.1);
`
const NFTName = styled.span`
max-width: 85%;
line-height: 110%;
letter-spacing: -0.02rem;
font-size: ${SIZING.px16};
font-family: "Haskoy Bold";
color: ${COLORS.StandardWhiteDefault};
overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;
-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
`

const CloseIcon = styled(MdClose)`
font-size: ${SIZING.px16};
fill: rgba(255, 251, 254, 0.5);
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
fill: rgba(255, 251, 254, 1);
}
`
const BottomContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
padding: ${SIZING.px12};
`
const Description = styled.div`
display: flex;
max-height: ${SIZING.px224};
padding: ${SIZING.px8};
font-size: ${SIZING.px14};
letter-spacing: -0.01rem;    
color: rgba(255, 251, 254, 0.8);
border: 1px solid rgba(255, 251, 254, 0.1);
border-radius: ${SIZING.px6};
font-family: "Haskoy Regular";
overflow: scroll;
overflow-x: hidden;
`

const CopyButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: ${SIZING.px12} 0;
gap: ${SIZING.px4};
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
letter-spacing: 0rem;
background-color: rgba(255, 251, 254, 0.1);
}
`
const CopyIcon = styled(MdContentCopy)`
font-size: ${SIZING.px16};
fill: ${COLORS.StandardWhiteDefault};
`

export default PromptCard