// components/Header/CategoryModal.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
  ModalContainer,
  ModalContent,
  Backdrop,
  MenuItem,
} from './Header.styles';

interface CategoryModalProps {
  onClose: () => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ onClose }) => {
  const router = useRouter();
  const items = [
    { name: 'Intro', path: '/intro' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
    { name: 'Projects', path: '/projects' },
  ];
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

  const handleClick = async (event: React.MouseEvent, path: string) => {
    event.stopPropagation();
    await router.push(path);
    onClose();
  };

  return (
    <ModalContainer>
      <Backdrop onClick={onClose} />
      <ModalContent>
        <ul>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              delay={`${index * 0.1}s`}
              onMouseMove={(event) => handleMouseMove(event, index)}
              onClick={(event) => handleClick(event, item.path)}
              style={{
                transform: `translate(${translates[index].x}px, ${translates[index].y}px)`,
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </ul>
      </ModalContent>
    </ModalContainer>
  );
};

export default CategoryModal;
