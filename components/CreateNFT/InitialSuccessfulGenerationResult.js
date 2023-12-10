import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/theme'
import Image from 'next/image'
import AvalancheLogo from '@/public/images/AvalancheLogo.webp'

const InitialSuccessfulGenerationResult = (
    {imageGenerated, generationPrompt, handleGenerationPromptChange, regenerateImage, mintNFT,
        price,setPrice}) => {
            
  return (
    <GeneratedDiv>

        <Image 
            src={imageGenerated.url} 
            alt="Generated NFT" 
            width={1000} 
            height={1000} 
        />

        <PromptAndButtonsColumn>

        <InputAndLabelColumn>
            <Label htmlFor="regenerationPrompt">
                Your current prompt
            </Label>

            <RegenerateTextarea 
                rows="8" 
                id="regenerationPrompt" 
                value={generationPrompt}  
                onChange={handleGenerationPromptChange}
                placeholder="A flying ape wearing a pink tracksuit..." 
                maxLength={3000}
                autoComplete="off"
                required
            />
        </InputAndLabelColumn>

        <InputAndLabelColumn>

        <Label htmlFor="price"> 
            Enter price in AVAX
        </Label>

        <PriceInputWrapper>
            <PriceInput 
                id="price" 
                placeholder="15.00" 
                type="number" 
                autocomplete="off"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <AVAXRow>
            <Image src={AvalancheLogo} alt="Avalanche" />
                AVAX
            </AVAXRow>
        </PriceInputWrapper>

        </InputAndLabelColumn>

        <ButtonColumn>

            <RegenerateButton onClick={regenerateImage}>
                Regenerate
            </RegenerateButton>

            <MintButton onClick={mintNFT}>
                Mint NFT
            </MintButton>

        </ButtonColumn>

        </PromptAndButtonsColumn>

  </GeneratedDiv>
  )
}

const GeneratedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: fit-content;
height: fit-content;
margin: 0 auto;
gap: ${SIZING.px24};
padding: ${SIZING.px32};
border: 1px solid rgba(255, 251, 254, 0.1);
border-radius: ${SIZING.px8};
background-color: rgba(255, 251, 254, 0.05);
backdrop-filter: blur(${SIZING.px32});
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.05),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.05);
z-index: 2;
transition: 0.4s ease-in-out;

img{
width: ${SIZING.px480};
height: ${SIZING.px480};
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
const PromptAndButtonsColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: ${SIZING.px480};
width: ${SIZING.px480};
`
const RegenerateTextarea = styled.textarea`
line-height: 130%;
padding: ${SIZING.px8} ${SIZING.px8};
font-size: ${SIZING.px20};
font-family: "Haskoy Semibold";
letter-spacing: -0.02rem;
border: 1px solid rgba(255, 251, 254, 0.5);
color: ${COLORS.StandardWhiteDefault};
outline: none;
border-radius: ${SIZING.px4};
background-color: transparent;
resize: none;

&:focus {
border: 1px solid rgba(255, 251, 254, 1);
}

&::placeholder {
font-family: "Haskoy Medium";
color: rgba(255, 251, 254, 0.5);
}
`
const ButtonColumn = styled.div`
display: flex;
flex-direction: column;
gap: ${SIZING.px8};
`
const MintButton = styled.button`
padding: ${SIZING.px16} 0;
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
const RegenerateButton = styled.button`
padding: ${SIZING.px16} 0;
font-size: ${SIZING.px18};
letter-spacing: -0.02rem;
font-family: "Haskoy Extra Bold";
color: ${COLORS.StandardWhiteDefault};
border: none;
outline: none;
border-radius: ${SIZING.px4};
background-color: rgba(229, 68, 109, 0.85);
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
letter-spacing: 0.02rem;
background-color: rgba(229, 68, 109, 1);
}
`
const InputAndLabelColumn = styled.div`
display: flex;
flex-direction: column;
gap: ${SIZING.px4};
`
const Label = styled.label`
font-size: ${SIZING.px16};
letter-spacing: -0.02rem;
font-family: "Haskoy Semibold";
color: ${COLORS.StandardWhiteDefault};
`
const PriceInputWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: ${SIZING.px8} ${SIZING.px8};
border: 1px solid rgba(255, 251, 254, 0.5);
color: ${COLORS.Purple800};
outline: none;
border-radius: ${SIZING.px4};
background-color: transparent;

&:focus-within {
border: 1px solid rgba(255, 251, 254, 1);
}
`
const PriceInput = styled.input`
font-size: ${SIZING.px20};
font-family: "Haskoy Bold";
letter-spacing: -0.05rem;
color: ${COLORS.StandardWhiteDefault};
background-color: transparent;
border: none;
outline: none;

&::placeholder {
font-family: "Haskoy Medium";
color: rgba(255, 251, 254, 0.5);
}

&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

&[type=number] {
-moz-appearance: textfield;
}
`
const AVAXRow = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px4};
letter-spacing: -0.08rem;
font-size: ${SIZING.px20};
font-family: "Haskoy Semibold";
color: rgba(255, 251, 254, 0.9);

img{
width: ${SIZING.px20};
height: ${SIZING.px20};
opacity: 0.8;
outline: none;
}
`

export default InitialSuccessfulGenerationResult