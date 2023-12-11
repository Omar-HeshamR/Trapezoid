import React from 'react'
import styled from 'styled-components'
import { SIZING } from '@/library/theme'
import { COLORS } from '@/library/theme'
import TopBarLogo from './TopBarLogo'
import { useRouter } from 'next/router'
import { useAddress, useSigner, ConnectWallet } from '@thirdweb-dev/react';
import { darkTheme, lightTheme } from "@thirdweb-dev/react";

const TopBar = ({marketplace, portfolio, createNFT}) => {

    const customDarkTheme = darkTheme({
        fontFamily: "Inter, sans-serif",
        colors: {
          primaryText: "rgba(255, 251, 254, 1)",
          secondaryText: "rgba(255, 251, 254, 0.8)",
          modalBg: "#000000",
          dropdownBg: "rgba(8, 7, 8, 1)",
          primaryButtonBg: "rgba(255, 251, 254, 0.15)",
          primaryButtonText: "rgba(255, 251, 254, 1)",
          accentText: "#E5446D",
          accentButtonBg: "#3423A6",
          borderColor: "rgba(255, 251, 254, 0.1)",
          separatorLine: "rgba(255, 251, 254, 0.05)",
          secondaryButtonBg: "rgba(255, 251, 254, 0.15)",
          secondaryButtonHoverBg: "rgba(255, 251, 254, 0.1)",
          secondaryButtonText: "rgba(255, 251, 254, 1)",
          connectedButtonBg: "rgba(255, 251, 254, 0.15)",
          connectedButtonBgHover: "rgba(255, 251, 254, 0.1)",
          walletSelectorButtonHoverBg: "rgba(255, 251, 254, 0.1)",
          secondaryIconHoverColor: "#ffffff",
          secondaryIconHoverBg: "#ffffff",
          secondaryIconColor: "#ffffff",
          selectedTextBg: "rgba(255, 251, 254, 1)",
        },
    });

    const signer = useSigner()
    const connectedAddress = useAddress()
    const router = useRouter()

  function goToMarketplace() {
    router.push("/marketplace")
  }

  function goToPortfolio() {
    router.push("/portfolio")
  }

  function goToCreateNFT() {
    router.push("/create-NFT")
  }

  const formatString = str => `${str.slice(0, 7)}...${str.slice(-5)}`;

  return (
    <Section>

        <TopBarLogo />

        <Nav>
            <Menu>
                {marketplace ? (
                    <SelectedMenuItem>
                        Marketplace
                    </SelectedMenuItem>
                ) : (
                    <MenuItem onClick={goToMarketplace}>
                        Marketplace
                    </MenuItem>
                )}
                {portfolio ? (
                    <SelectedMenuItem>
                        My Portfolio
                    </SelectedMenuItem>
                ) : (
                    <MenuItem onClick={goToPortfolio}>
                        My Portfolio
                    </MenuItem>
                )}
                {createNFT ? (
                    <SelectedMenuItem>
                        Create NFT
                    </SelectedMenuItem>
                ) : (
                    <MenuItem onClick={goToCreateNFT}>
                        Create NFT
                    </MenuItem>
                )}
            </Menu>
            { connectedAddress ? 
            <ConnectWallet theme={customDarkTheme}>
                {formatString(connectedAddress)}
            </ConnectWallet>
            : <ConnectWallet theme={customDarkTheme}>
                Connect Wallet
            </ConnectWallet>
            }

        </Nav>

    </Section>
  )
}

const Section = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
padding: 0 ${SIZING.px64};
width: 100vw;
min-height: 11vh;
background-color: rgba(255, 251, 254, 0.15);
border-bottom: 1px solid rgba(255, 251, 254, 0.25);
backdrop-filter: blur(${SIZING.px8});
z-index: 2;
transition: 0.4s ease-in-out;
cursor: pointer;

&:hover{
background-color: rgba(255, 251, 254, 0.2);
border-bottom: 1px solid rgba(255, 251, 254, 0.1);
}
`
const Nav = styled.nav`
display: flex;
align-items: center;
gap: ${SIZING.px40};
`
const Menu = styled.ul`
display: flex;
align-items: center;
gap: ${SIZING.px24};
list-style: none;
`
const MenuItem = styled.li`
font-size: ${SIZING.px16};
letter-spacing: -0.05rem;
font-family: "Haskoy Semibold";
color: ${COLORS.StandardWhiteDefault};
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
padding: ${SIZING.px8} ${SIZING.px16};
border-radius: ${SIZING.px2};
background-color: rgba(255, 251, 254, 0.1);
outline: 1px solid rgba(255, 251, 254, 0.5);
}
`
const SelectedMenuItem = styled.li`
padding: ${SIZING.px8} ${SIZING.px16};
font-size: ${SIZING.px16};
letter-spacing: -0.05rem;
font-family: "Haskoy Bold";
color: ${COLORS.StandardWhiteDefault};
border-radius: ${SIZING.px2};
background-color: rgba(255, 251, 254, 0.1);
outline: 1px solid rgba(255, 251, 254, 0.5);
`

const ConnectWalletButton = styled(ConnectWallet)`
padding: ${SIZING.px8} ${SIZING.px16} !important;
font-size: ${SIZING.px16} !important;
letter-spacing: -0.02rem !important;
font-family: "Haskoy Bold" !important;
color: ${COLORS.StandardWhiteDefault} !important;
border-radius: ${SIZING.px4} !important;
background-color: rgba(255, 251, 254, 0.15) !important;
border: 1px solid rgba(255, 251, 254, 0.2) !important;
outline: none !important;
transition: 0.2s ease-in-out !important;
cursor: pointer !important;

&:hover{
letter-spacing: 0rem !important;
}
`
export default TopBar