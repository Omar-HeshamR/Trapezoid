import React from 'react'
import styled from 'styled-components'
import { SIZING } from '@/library/theme'
import { COLORS } from '@/library/theme'
import TopBarLogo from './TopBarLogo'
import { useRouter } from 'next/router'
import { ConnectWallet } from '@thirdweb-dev/react'

const TopBar = ({marketplace, portfolio, createNFT}) => {

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
            <ConnectWalletButton>
                Connect Wallet
            </ConnectWalletButton>
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
export default TopBar