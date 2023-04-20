// components/Header/CategoryModal.tsx
import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  Backdrop,
  MenuItem,
} from './Header.styles';

const CategoryModal: React.FC = () => {
  const items = ['About', 'Skills', 'Experience', 'Contact', 'Projects'];
  const [translates, setTranslates] = useState(
    Array.from({ length: items.length }, () => ({ x: 0, y: 0 }))
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLLIElement>,
    index: number
  ) => {
    const { clientX, clientY, target } = event;
    const { left, top, width, height } = (
      target as HTMLElement
    ).getBoundingClientRect();

    const offsetX = clientX - left;
    const offsetY = clientY - top;

    const x = Math.round((offsetX / width - 0.5) * 50);
    const y = Math.round((offsetY / height - 0.5) * 50);

    setTranslates((prevTranslates) => {
      const newTranslates = [...prevTranslates];
      newTranslates[index] = { x, y };
      return newTranslates;
    });
  };
  return (
    <ModalContainer>
      <Backdrop />
      <ModalContent>
        <ul>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              delay={`${index * 0.1}s`}
              onMouseMove={(event) => handleMouseMove(event, index)}
              style={{
                transform: `translate(${translates[index].x}px, ${translates[index].y}px)`,
              }}
            >
              {item}
            </MenuItem>
          ))}
        </ul>
      </ModalContent>
    </ModalContainer>
  );
};

export default CategoryModal;
