// index.style.ts
import styled, { css, keyframes } from 'styled-components';

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
  /* background-color: #f6f6f6; */
  margin-left: 50px;
  font-size: 50px;
  /* 애니메이션 추가 */
  animation: ${bounce} 1s ease-out;
`;

// pages/index.style.ts

// 기존 스타일 코드 ...

// export const Name = styled.h1<{ reverse?: boolean }>`
//   ${({ reverse }) => css`
//     animation: ${reverse ? bounceOut : bounceIn} 1s ease-out forwards;
//   `}
// `;

const bounceIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const bounceOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
