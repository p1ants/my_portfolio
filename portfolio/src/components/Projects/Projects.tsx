// portfolio/src/components/Projects/Projects.tsx
import React from 'react';
import Image from 'next/image';
import { ProjectContainer, ProjectImage } from './Projects.styles';

const Projects = () => {
  const projectImages = [
    {
      id: 1,
      src: '/project_image/cocodingding.png',
      alt: 'CoCodingDing Project',
      title: 'CoCodingDing',
    },
    {
      id: 2,
      src: '/project_image/MyKiosk.png',
      alt: 'MyKiosk Project',
      title: 'My Kiosk',
    },
  ];

  return (
    <ProjectContainer>
      {projectImages.map((image) => (
        <div key={image.id}>
          <ProjectImage>
            <Image src={image.src} alt={image.alt} width={300} height={200} />
            <div>{image.title}</div>
          </ProjectImage>
        </div>
      ))}
    </ProjectContainer>
  );
};

export default Projects;
