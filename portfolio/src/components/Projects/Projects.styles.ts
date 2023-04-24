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
