// components/FrontEnd/FrontEnd.styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CircleWrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  cursor: move;
`;

export const MainCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  user-select: none;
`;

const calculateLinePosition = (index: number) => {
  const angle = (2 * Math.PI * index) / 6;
  const x = 50 * Math.cos(angle) + 50;
  const y = 50 * Math.sin(angle) + 50;
  return `translate(${x}%, ${y}%)`;
};

export const Line = styled.div<{ index: number }>`
  position: absolute;
  width: 2px;
  height: 100px;
  background-color: green;
  transform-origin: bottom;
  transform: ${({ index }) => calculateLinePosition(index)} translateY(-50%);
`;


export const Technology = styled.div<{ index: number }>`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  transform-origin: bottom;
  transform: ${({ index }) => calculateLinePosition(index)} translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleLabel = styled.div`
  font-weight: bold;
  color: black;
  user-select: none;
`;
