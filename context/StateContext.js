import React, { createContext, useContext, useState, useEffect } from 'react';
import {ethers} from 'ethers';

const Context = createContext();

export const StateContext = ({ children }) => {

const [ selectedNFT, setSelectedNFT ] = useState(undefined);
const [ showBuyModal, setShowBuyModal ] = useState(false);
const [ connectedAddress, setConnectedAddress] = useState(undefined);
const [ signer, setSigner ] = useState(undefined);

async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
      try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          setSigner(signer)
          const address = await signer.getAddress();
          setConnectedAddress(address)
          console.log(address)
          return signer; 
      } catch (error) {
          console.error('User denied account access or an error occurred:', error);
      }
  } else {
      console.error('Ethereum object (MetaMask) not found');
  }
}

return(
    <Context.Provider
    value={{

        // auth
        signer,
        connectWallet,
        connectedAddress,
      
        selectedNFT, 
        setSelectedNFT,
        showBuyModal,
        setShowBuyModal
    }}
    >
      {children}
    </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);