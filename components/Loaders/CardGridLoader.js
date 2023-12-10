import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SIZING } from '@/library/theme';
import { CardGrid } from '@/library/theme';

const CardGridLoader = () => {
  const mockCards = Array.from({ length: 10 }, (_, index) => (
    <MockCard key={index} animationDelay={index * 0.1} />
  ));

  return <CardGrid>{mockCards}</CardGrid>;
};

const pulseAnimation = keyframes`
0% {
background-color: rgba(255, 251, 254, 0.05);
border: 1px solid rgba(255, 251, 254, 0.1);
transform: scale(1.00);
}
50% {
background-color: rgba(255, 251, 254, 0.1);
border: 1px solid rgba(255, 251, 254, 0.2);
transform: scale(1.01);
}
100% {
background-color: rgba(255, 251, 254, 0.05);
border: 1px solid rgba(255, 251, 254, 0.1);
transform: scale(1.00);
}
`
const MockCard = styled.article`
display: flex;
flex-direction: column;
flex: 1 0 calc(20% - ${SIZING.px24});
width: calc(20% - ${SIZING.px24});
height: ${SIZING.px352};
border-radius: ${SIZING.px8};
backdrop-filter: blur(${SIZING.px8});
animation: ${pulseAnimation} 0.8s infinite ease-in-out;
animation-delay: ${(props) => `${props.animationDelay}s`};
`

export default CardGridLoader
