import React, { useState} from 'react'
import styled from 'styled-components'
import { SIZING } from '@/library/theme'
import { COLORS } from '@/library/theme'
import TopBar from '@/components/TopBar/TopBar'
import { Section, DarkOverlay } from '@/library/theme'
import Confetti from 'react-confetti'
import InitialImageGenerationLoad from '@/components/CreateNFT/InitialImageGenerationLoad'
import InitialSuccessfulGenerationResult from '@/components/CreateNFT/InitialSuccessfulGenerationResult'
import IsMinting from '@/components/CreateNFT/IsMinting'
import IsMinted from '@/components/CreateNFT/IsMinted'
import InitialScreen from '@/components/CreateNFT/InitialScreen'
import toast from 'react-hot-toast'

const CreateNFT = () => {

  const [initialImageGenerationLoad, setInitialImageGenerationLoad] = useState(false);
  const [initialSuccessfulGenerationResult, setInitialSuccessfulGenerationResult] = useState(false);
  const [name, setName] = useState('');
  const [generationPrompt, setGenerationPrompt] = useState('');
  const [imageGenerated, setImageGenerated] = useState();
  const [isMinting, setIsMinting] = useState(false)
  const [isMinted, setIsMinted] = useState(false)

  const OpenAI = require("openai")
  const openai = new OpenAI({
    apiKey: 'API-KEY-TESTING',
    dangerouslyAllowBrowser: true
  })

  async function image_generate(){
    if (name.trim() === '' || generationPrompt.trim() === '') {
      toast.error('Please fill in the Name and Generation Prompt before generating.')
      return;
    }else{
        console.log("started")
        console.log(generationPrompt)
        setInitialImageGenerationLoad(true)
        const response =  await openai.images.generate({
          model: 'dall-e-3',
          prompt: generationPrompt,
          n: 1,
          size: "1024x1024"
        })
        console.log("response", response)
        setImageGenerated(response.data[0])
        setInitialImageGenerationLoad(false)
        setInitialSuccessfulGenerationResult(true)
    }
  }

  function mintNFT() {
    setInitialSuccessfulGenerationResult(false);
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      setIsMinted(true);
    }, 10000);
  };

  const regenerateImage = async () => {
    setInitialSuccessfulGenerationResult(false);
    await image_generate();
  };

  const handleNameChange = (e) => {
    if (e.target.value.length <= 30) {
      setName(e.target.value);
    }
  };

  const handleGenerationPromptChange = (e) => {
    if (e.target.value.length <= 3000) {
      setGenerationPrompt(e.target.value);
    }
  };

  return (
    <Section >

      {isMinted && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={[
            COLORS.StandardWhiteDefault,
            COLORS.Purple700Default,
            COLORS.Pink500Default,
            COLORS.Yellow800Default,
          ]}
        />
        )}

        <TopBar createNFT header="Create an AI-generated NFT"/>

        <FixedContainer>

          {initialImageGenerationLoad ? (

            <InitialImageGenerationLoad />

          ) : initialSuccessfulGenerationResult ? (   

            <InitialSuccessfulGenerationResult  
              imageGenerated={imageGenerated}
              generationPrompt={generationPrompt}
              handleGenerationPromptChange={handleGenerationPromptChange}
              regenerateImage={regenerateImage}
              mintNFT={mintNFT}
            />

          ) : isMinting ? (

            <IsMinting />

          ) : isMinted ?(

            <IsMinted 
              imageGenerated={imageGenerated}
              name={name}
            />

          ) : (

            <InitialScreen 
              name={name}
              handleNameChange={handleNameChange}
              generationPrompt={generationPrompt}
              handleGenerationPromptChange={handleGenerationPromptChange}
              image_generate={image_generate}
            />

          )}
    
        </FixedContainer>

        <DarkOverlay />

    </Section>
  )
}

const FixedContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: calc(100vh - 10vh);
padding-top: calc(${SIZING.px48} + 11vh);
padding-left: ${SIZING.px64};
padding-right: ${SIZING.px64}; 
`

export default CreateNFT