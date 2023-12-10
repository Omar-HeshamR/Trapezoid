import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

const [ selectedNFT, setSelectedNFT ] = useState(undefined);
const [ showBuyModal, setShowBuyModal ] = useState(false)

return(
    <Context.Provider
    value={{
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