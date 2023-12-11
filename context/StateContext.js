import React, { createContext, useContext, useState, useEffect } from 'react';
import {ethers} from 'ethers';
import { useAddress, useSigner } from '@thirdweb-dev/react';

const Context = createContext();

export const StateContext = ({ children }) => {

  const Trapezoid_contract_address = "0x8ff892504A292F5e893Eb756E3bb8afAe6710Fcb";
  // older: 0x24D5AF3Cd68d0C98DE722D68b38a5F19af98692f
  const chainlink_functions_contract_adress = "";
  const [ selectedNFT, setSelectedNFT ] = useState(undefined);
  const [ showBuyModal, setShowBuyModal ] = useState(false);

return(
    <Context.Provider
    value={{

        selectedNFT, 
        setSelectedNFT,
        showBuyModal,
        setShowBuyModal,

        Trapezoid_contract_address
    }}
    >
      {children}
    </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);