// components/Header/Header.styles.ts
import styled from 'styled-components';

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
    transform: translateY(-50%) translateX(-50%) rotate(45deg) scaleY(0.5);
  }

  &:nth-child(2) {
    transform: translateY(-50%) translateX(-50%) rotate(-45deg) scaleY(0.5);
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
