// index.style.ts
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  /* 기존 스타일 */
  width: 100%;
  height: 800px;
  background-color: #f6f6f6;

  /* 애니메이션 추가 */
  animation: ${bounce} 1s ease-out;
`;
