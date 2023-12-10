import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SIZING } from '@/library/theme';

const CreatingNFTLoader = () => {
  return <CreatingNFTLoaderContainer />;
};

const l18 = keyframes`
0% {
  background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%, calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
}
100% {
  background-position: calc(0 * 100% / 3) 51%, calc(1 * 100% / 3) 50.5%, calc(2 * 100% / 3) 49.5%, calc(3 * 100% / 3) 49%;
}
`
const CreatingNFTLoaderContainer = styled.div`
height: ${SIZING.px96};
aspect-ratio: 2;
--c:no-repeat linear-gradient(rgba(255, 251, 254, 0.2) 0 0);
background: var(--c), var(--c), var(--c), var(--c);
background-size: 24% 48%;
animation: ${l18} 1s infinite cubic-bezier(0.5, 150, 0.5, -150);
`

export default CreatingNFTLoader
