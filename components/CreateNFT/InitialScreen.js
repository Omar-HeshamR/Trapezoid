import React from 'react'
import styled from 'styled-components'
import { SIZING } from '@/library/theme'
import { COLORS } from '@/library/theme'

const InitialScreen = ({name, handleNameChange, generationPrompt, handleGenerationPromptChange, image_generate}) => {
  return (
    <FormBody>

        <InputAndLabelColumn>

        <Label htmlFor="nftName">
            Name of your NFT
        </Label>

        <Input 
            id="nftName" 
            type="text" 
            placeholder='Musaka #9012' 
            value={name}  
            onChange={handleNameChange}
            maxLength={30}
            autoComplete="off"
            required
        />

        </InputAndLabelColumn>

        <InputAndLabelColumn>

        <Label htmlFor="generationPrompt">
            Enter your generation prompt
        </Label>

        <Textarea 
            rows="4" 
            id="generationPrompt" 
            value={generationPrompt}  
            onChange={handleGenerationPromptChange}
            placeholder="A flying ape wearing a pink tracksuit..." 
            maxLength={3000}
            autoComplete="off"
            required
        />

        </InputAndLabelColumn>

        <GenerateButton type="submit" onClick={image_generate}>
            Generate
        </GenerateButton>

    </FormBody>
  )
}

const FormBody = styled.div`
display: flex;
flex-direction: column;
padding: ${SIZING.px32};
gap: ${SIZING.px32};
border: 1px solid rgba(255, 251, 254, 0.1);
border-radius: ${SIZING.px8};
background-color: rgba(255, 251, 254, 0.05);
backdrop-filter: blur(${SIZING.px32});
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.05),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.05);
z-index: 2;
transition: 0.4s ease-in-out;

&:hover{
border: 1px solid rgba(255, 251, 254, 0.2);
box-shadow: ${SIZING.px8} ${SIZING.px8} ${SIZING.px64} rgba(8, 7, 8, 0.1),
${SIZING.px2} ${SIZING.px2} ${SIZING.px8} rgba(8, 7, 8, 0.1);
}
`
const InputAndLabelColumn = styled.div`
display: flex;
flex-direction: column;
gap: ${SIZING.px4};
`
const Input = styled.input`
flex-grow: 1;
padding: ${SIZING.px8} ${SIZING.px8};
font-size: ${SIZING.px20};
font-family: "Haskoy Semibold";
letter-spacing: -0.02rem;
border: 1px solid rgba(255, 251, 254, 0.2);
color: ${COLORS.StandardWhiteDefault};
outline: none;
border-radius: ${SIZING.px4};
background-color: transparent;

&:focus {
border: 1px solid rgba(255, 251, 254, 1);
}

&::placeholder {
font-family: "Haskoy Medium";
color: rgba(255, 251, 254, 0.5);
}
`
const Textarea = styled.textarea`
line-height: 130%;
padding: ${SIZING.px8} ${SIZING.px8};
font-size: ${SIZING.px20};
font-family: "Haskoy Semibold";
letter-spacing: -0.02rem;
border: 1px solid rgba(255, 251, 254, 0.2);
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
const GenerateButton = styled.button`
padding: ${SIZING.px16} 0;
font-size: ${SIZING.px24};
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
const Label = styled.label`
font-size: ${SIZING.px16};
letter-spacing: -0.02rem;
font-family: "Haskoy Semibold";
color: ${COLORS.StandardWhiteDefault};
`

export default InitialScreen