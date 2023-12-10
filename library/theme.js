import styled from "styled-components"

export const COLORS = {

Black900Default: '#080708',
Black800: '#231F23',
Black700: '#3F373F',
Black600: '#5A4E5A',
Black500: '#756675',
Black400: '#907F90',
Black300: '#A79AA7',
Black200: '#BFB5BF',
Black100: '#D7D1D7',
Black000: '#eeecee',

StandardWhiteDefault: '#FFFBFE',

Pink900: '#5C0017',
Pink800: '#7E112C',
Pink700: '#AB173C',
Pink600: '#D71D4C',
Pink500Default: '#E5446D',
Pink400: '#EB6F8E',
Pink300: '#F29CB2',
Pink200: '#FFC2D1',
Pink100: '#FFDBE4',

Purple900: '#191150',
Purple800: '#271A7A',
Purple700Default: '#3423A6',
Purple600: '#412CCE',
Purple500: '#6552DA',
Purple400: '#8475EB',
Purple300: '#A89CF7',
Purple200: '#CFC8FE',
Purple100: '#E4E0FF',

Yellow900: '#E6990A',
Yellow800Default: '#F6B02C',
Yellow700: '#F8C25D',
Yellow600: '#FAD58E',
Yellow500: '#FFE8BD',
Yellow400: '#FFF1D6',

};
    
export const SIZING = {
px2: "0.125rem",
px4: "0.25rem",
px6: "0.375rem",
px8: "0.5rem",
px10: "0.625rem",
px12: "0.75rem",
px14: "0.875rem",
px16: "1rem",
px18: "1.125rem",
px20: "1.25rem",
px24: "1.5rem",
px32: "2rem",
px36: "2.25rem",
px40: "2.5rem",
px48: "3rem",
px56: "3.5rem",
px64: "4rem",
px80: "5rem",
px96: "6rem",
px128: "8rem",
px160: "10rem",
px224: "14rem",
px256: "16rem",
px352: "22rem",
px416: "26rem",
px480: "30rem"
}

export const Section = styled.section`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
background-color: ${COLORS.Purple500};
background-image:
radial-gradient(at 21% 77%, hsla(214,83%,71%,1) 0px, transparent 50%),
radial-gradient(at 44% 38%, hsla(308,93%,65%,1) 0px, transparent 50%),
radial-gradient(at 99% 45%, hsla(354,89%,76%,1) 0px, transparent 50%),
radial-gradient(at 47% 0%, hsla(207,95%,78%,1) 0px, transparent 50%),
radial-gradient(at 22% 98%, hsla(159,87%,68%,1) 0px, transparent 50%),
radial-gradient(at 62% 29%, hsla(238,85%,66%,1) 0px, transparent 50%),
radial-gradient(at 20% 5%, hsla(335,74%,64%,1) 0px, transparent 50%);
z-index: 0;
`
export const DarkOverlay = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
background-color: rgba(8, 7, 8, 0.25);
z-index: 1;
`
export const ScrollableContainer = styled.section`
display: flex;
flex-direction: column;
width: 100%;
overflow-y: scroll;
z-index: 2;
`
export const CardGrid = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
padding-top: calc(${SIZING.px48} + 11vh);
padding-bottom: ${SIZING.px48};
padding-left: ${SIZING.px64};
padding-right: ${SIZING.px64};  
gap: ${SIZING.px24};
`