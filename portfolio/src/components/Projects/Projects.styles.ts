// portfolio/src/components/Projects/Projects.styles.ts
import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProjectCard = styled.div`
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: translateY(-10px);
  }
  /* 애니메이션 추가 */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s forwards;
  animation-delay: calc(var(--animation-order) * 300ms);

  &:nth-child(2) {
    --animation-order: 1;
  }

  &:nth-child(3) {
    --animation-order: 2;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProjectImage = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  ${ProjectCard}:hover & {
    img {
      transform: scale(1.1);
    }
  }
`;
