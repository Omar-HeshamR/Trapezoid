import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/theme'
import Image from 'next/image'
import TrapezoidLogoLight from '@/public/images/TrapezoidLogoLight.webp'
import { useRouter } from 'next/router'


const HeroNavbar = () => {

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
            <ConnectWalletButton>
                Connect Wallet
            </ConnectWalletButton>
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
const ConnectWalletButton = styled.button`
padding: ${SIZING.px16} ${SIZING.px24};
font-size: ${SIZING.px16};
letter-spacing: -0.02rem;
font-family: "Haskoy Bold";
color: ${COLORS.StandardWhiteDefault};
border-radius: ${SIZING.px4};
background-color: rgba(255, 251, 254, 0.15);
border: 1px solid rgba(255, 251, 254, 0.2);
outline: none;
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
letter-spacing: 0rem;
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