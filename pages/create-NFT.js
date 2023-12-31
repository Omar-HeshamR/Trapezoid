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
import TRAPEZOIDABI from '@/library/TrapezoidABI.json'
import { useStateContext } from '@/context/StateContext.js'
import { useRouter } from 'next/router'
import { ethers } from 'ethers';
import { useStorage, useAddress, useSigner, useStorageUpload } from '@thirdweb-dev/react';

const CreateNFT = () => {

  const { Trapezoid_contract_address } = useStateContext();
  const [initialImageGenerationLoad, setInitialImageGenerationLoad] = useState(false);
  const [initialSuccessfulGenerationResult, setInitialSuccessfulGenerationResult] = useState(false);
  const [name, setName] = useState('');
  const [price,setPrice] = useState();
  const [generationPrompt, setGenerationPrompt] = useState('');
  const [imageGenerated, setImageGenerated] = useState();
  const [isMinting, setIsMinting] = useState(false)
  const [isMinted, setIsMinted] = useState(false)
  const router = useRouter();
  const storage = useStorage();
  const signer = useSigner();
  const connectedAddress = useAddress();

  // const [file, setFile] = useState(null);
  // const { mutateAsync: upload, data: ipfsUrl } = useStorageUpload();

  async function callImageGenerateApi() {
    if (name.trim() === '' || generationPrompt.trim() === '') {
      toast.error('Please fill in the Name and Generation Prompt before generating.')
      return;
    }
    console.log(generationPrompt)
    setInitialImageGenerationLoad(true)
    const response = await fetch('/api/generateArt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ generationPrompt }),
    });

    if (!response.ok) {
         toast.error('Error in Generation, please try again.')
         setInitialImageGenerationLoad(false)
         return;
    }
    const imageJson = await response.json();
    // console.log("response", imageJson)
    // console.log("HERER: ", imageJson.image.url)
    // const proxyUrl = `/api/fetchImage?url=${encodeURIComponent(imageJson.image.url)}`;

    // fetch(proxyUrl)
    // .then(response => response.blob())
    // .then(async (blob) => {
    //   const imageFile = new File([blob], 'image.png', { type: 'image/png' });
    //   setFile(imageFile);
    //   console.log(imageFile)
    //   const uploadRes = await upload(proxyUrl);
    //   console.log(uploadRes)
    // })
    // .catch(error => console.error('Error fetching image:', error));

    setImageGenerated(imageJson.image)
    setInitialImageGenerationLoad(false)
    setInitialSuccessfulGenerationResult(true)  
}

  async function mintNFT() {
    if(!signer){
      toast.error("CONNECT WALLET!")
      return; 
    }
    setInitialSuccessfulGenerationResult(false);
    setIsMinting(true);
    try{
      const metadata = {
        name: name,
        artist: connectedAddress,
        prompt: generationPrompt,
        price: price,
        image: imageGenerated.url
    };
      const contract = new ethers.Contract(Trapezoid_contract_address, TRAPEZOIDABI, signer);
      const url = await storage.upload(metadata);
      const priceInWei = ethers.utils.parseEther(price.toString());
      const tx = await contract.mintNFT(url, priceInWei);
      await tx.wait();
      setIsMinting(false);
      setIsMinted(true);
    }catch(err){
      setIsMinting(false);
      toast.error(`ERROR: ${err}`)
      console.log(err)
    }
  };

  const regenerateImage = async () => {
    setInitialSuccessfulGenerationResult(false);
    await callImageGenerateApi();
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
          gravity={3}
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
              price={price}
              setPrice={setPrice}
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
              image_generate={callImageGenerateApi}
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