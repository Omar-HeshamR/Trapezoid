import React from 'react'
import styled from 'styled-components'
import { SIZING } from '@/library/theme'
import { COLORS } from '@/library/theme'
import Image from 'next/image'
import TrapezoidLogo from '@/public/images/TrapezoidLogoLight.webp'
import { useRouter } from 'next/router'

const TopBarLogo = () => {

  const router = useRouter()

  function goToHome() {
    router.push("/")
  }


  return (
    <Logo onClick={goToHome}>

        <Image src={TrapezoidLogo} alt="Pixel Purse" />

        <TopBarLogoText>
            Trapezoid
        </TopBarLogoText>

    </Logo>
  )
}

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
const TopBarLogoText = styled.span`
margin-top: ${SIZING.px2};
font-size: ${SIZING.px24};
letter-spacing: -0.08rem;
font-family: "Haskoy Extra Bold";
color: ${COLORS.StandardWhiteDefault};
`


export default TopBarLogo