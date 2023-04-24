// portfolio/src/components/Projects/Projects.tsx
import React from 'react';
import Image from 'next/image';
import { ProjectContainer, ProjectCard, ProjectImage } from './Projects.styles';

const Projects = () => {
  const projectImages = [
    {
      id: 1,
      src: '/project_image/cocodingding.png',
      alt: 'CoCodingDing Project',
      title: 'CoCoDingDing',
    },
    {
      id: 2,
      src: '/project_image/MyKiosk.png',
      alt: 'MyKiosk Project',
      title: 'My Kiosk',
    },
    {
      id: 3,
      src: '/project_image/yogiyo.png',
      alt: 'yogiyo Project',
      title: 'Yogiyo Clone Coding',
    },
  ];

  return (
    <ProjectContainer>
      {projectImages.map((image) => (
        <ProjectCard key={image.id}>
          <ProjectImage>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              layout='responsive'
              objectFit='cover'
            />
          </ProjectImage>
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
};

export default Projects;
