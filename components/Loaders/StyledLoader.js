import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SIZING } from '@/library/theme';

const LoadingSpinner = () => {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
};
  

const layers1 = keyframes`
0% { box-shadow: 0px 0px 0 0px  }
90%, 100% { box-shadow: ${SIZING.px24} ${SIZING.px24} 0 -4px  }
`
const layerTr = keyframes`
0% { transform: translate(0, 0) scale(1) }
100% { transform: translate(-${SIZING.px24}, -${SIZING.px24}) scale(1) }
`
const LoaderContainer = styled.div`
position: relative;
width: ${SIZING.px160};
height: ${SIZING.px160};
`
const Loader = styled.div`
position: absolute;
inset: 0;
width: 100%;
height: 100%;
background: rgba(255, 251, 254, 0.5);
transform: rotateX(65deg) rotate(45deg);
color: rgba(255, 251, 254, 0.3);
animation: ${layers1} 0.4s linear infinite alternate;

&:after {
content: '';
position: absolute;
inset: 0;
background: rgba(255, 251, 254, 0.4);
animation: ${layerTr} 0.4s linear infinite alternate;
}
`

export default LoadingSpinner
