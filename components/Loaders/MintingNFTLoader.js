import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '@/library/theme';
import { SIZING } from '@/library/theme';

const MyComponent = () => (
    <Loader />
);

const rotateAnimation = keyframes`
100% {
transform: rotate(360deg);
}
`
const mvxAnimation = keyframes`
0%, 15% {
transform: translate(0, 0) rotate(0deg);
}
50% {
transform: translate(-50%, 50%) rotate(180deg);
}
100% {
transform: translate(0%, 0%) rotate(180deg);
}
`
const mvrxAnimation = keyframes`
0%, 15% {
transform: translate(0, 0) rotate(0deg);
}
50% {
transform: translate(50%, -50%) rotate(180deg);
}
100% {
transform: translate(0%, 0%) rotate(180deg);
}
`
const Loader = styled.div`
width: ${SIZING.px96};
height: ${SIZING.px96};
position: relative;
animation: ${rotateAnimation} 4s linear infinite;

&:before,
&:after {
content: "";
display: block;
border: ${SIZING.px48} solid;
border-color: transparent transparent rgba(255, 251, 254, 0.8) rgba(255, 251, 254, 0.8);
position: absolute;
left: 0;
top: 0;
animation: ${mvxAnimation} 1s infinite ease-in;
}

&:before {
left: ${SIZING.px2};
top: ${SIZING.px2};
border-color:  rgba(255, 251, 254, 0.4) rgba(255, 251, 254, 0.4) transparent transparent;
animation-name: ${mvrxAnimation};
}
`

export default MyComponent
