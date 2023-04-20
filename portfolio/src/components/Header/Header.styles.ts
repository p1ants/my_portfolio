// components/Header/Header.styles.ts
import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const HomeButton = styled.button`
  position: relative;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 70px;
  height: 70px;
`;

export const HomeIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transform-origin: center;
  transition: all 0.5s ease-in-out;

  &:nth-child(1) {
    transform: translateY(-50%) translateX(-50%) rotate(45deg);
  }

  &:nth-child(2) {
    transform: translateY(-50%) translateX(-50%) rotate(-45deg);
  }

  &:nth-child(3) {
    transform: translateY(-50%) translateX(-50%) scaleY(0.5);
  }

  ${HomeButton}:hover & {
    &:nth-child(1) {
      transform: translateY(-50%) translateX(-50%) rotate(135deg);
    }

    &:nth-child(2) {
      transform: translateY(-50%) translateX(-50%) rotate(-135deg);
    }

    &:nth-child(3) {
      transform: translateY(-50%) translateX(-50%) scaleY(1);
    }
  }
`;

//카테고리 버튼
export const CategoriesButton = styled(HomeButton)`
  position: relative;
  width: 70px;
  height: 70px;
`;

export const IconLine = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 2px;
  background-color: #fff;
  transform-origin: center;
  transition: all 0.5s ease-in-out;

  &:nth-child(1) {
    transform: translateY(-50%) translateX(-50%);
  }

  &:nth-child(2) {
    transform: translateY(-50%) translateX(-50%) rotate(90deg);
  }

  ${CategoriesButton}:hover & {
    width: 100%;

    &:nth-child(1) {
      transform: translateY(-50%) translateX(-50%) rotate(45deg);
    }

    &:nth-child(2) {
      transform: translateY(-50%) translateX(-50%) rotate(-45deg);
    }
  }
`;

//카테고리 모달창

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 0.3s ease-out;
  pointer-events: none;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: transparent;
  border-radius: 5px;
  padding: 20px;
  z-index: 1;
  animation: ${slideUp} 0.5s ease-out;
`;

const bounceUp = keyframes`
  0% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;
// components/Header/Header.styles.ts
// components/Header/Header.styles.ts
export const MenuItem = styled.li<{ delay: string; reverse?: boolean }>`
  ${({ delay, reverse }) => css`
    animation: ${reverse ? bounceDown : bounceUp} 0.5s ease-out ${delay}
      forwards;
  `}
  overflow: hidden;
  font-size: 50px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin-bottom: 40px;
`;

const bounceDown = keyframes`
  0% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(100% 0 0 0);
  }
`;
