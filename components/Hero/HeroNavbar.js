import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/theme'
import Image from 'next/image'
import TrapezoidLogoLight from '@/public/images/TrapezoidLogoLight.webp'
import { useRouter } from 'next/router'
import { ConnectWallet } from '@thirdweb-dev/react';
import { darkTheme, lightTheme } from "@thirdweb-dev/react";

const HeroNavbar = () => {

    const customDarkTheme = lightTheme({
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

    const router = useRouter()
    const formatString = str => `${str.slice(0, 7)}...${str.slice(-5)}`;

    function goToMarketplace() {
        router.push("/marketplace")
    }

    function goToPortfolio() {
        router.push("/portfolio")
    }

    function goToCreateNFT() {
        router.push("/create-NFT")
    }

  return (
    <Nav>

        <Logo>
            <Image src={TrapezoidLogoLight} alt="Pixel Purse" />
            <HeroNavbarLogoText>
                Trapezoid
            </HeroNavbarLogoText>
        </Logo>

        <LeftRow>

            <Menu>
                <MenuItem onClick={goToMarketplace}>
                    Marketplace
                </MenuItem>
                <MenuItem onClick={goToPortfolio}>
                    My Portfolio
                </MenuItem>
                <MenuItem onClick={goToCreateNFT}>
                    Create NFT
                </MenuItem>
            </Menu>

            <ConnectWallet theme={customDarkTheme}/>

        </LeftRow>

    </Nav>
  )
}

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 ${SIZING.px64};
height: 11vh;
background-color: rgba(255, 251, 254, 0.15);
border-bottom: 1px solid rgba(255, 251, 254, 0.25);
backdrop-filter: blur(${SIZING.px64});
z-index: 2;
transition: 0.4s ease-in-out;
cursor: pointer;

&:hover{
background-color: rgba(255, 251, 254, 0.05);
border-bottom: 1px solid rgba(255, 251, 254, 0.1);
}
`
const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: ${SIZING.px8};

img{
display: block;
width: auto;
height: ${SIZING.px24};;
object-fit: cover;
}

&:hover{
cursor: pointer;
}
`
const LeftRow = styled.div`
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
font-family: "Haskoy Bold";
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
const HeroNavbarLogoText = styled.span`
margin-top: ${SIZING.px2};
font-size: ${SIZING.px24};
letter-spacing: -0.08rem;
font-family: "Haskoy Extra Bold";
color: ${COLORS.StandardWhiteDefault};
`


export default HeroNavbar