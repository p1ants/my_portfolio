// components/Header/CategoryModal.tsx
import React from 'react';
import {
  ModalContainer,
  ModalContent,
  Backdrop,
  MenuItem,
} from './Header.styles';

const CategoryModal: React.FC = () => {
  return (
    <ModalContainer>
      <Backdrop />
      <ModalContent>
        <ul>
          <MenuItem delay='0s'>About</MenuItem>
          <MenuItem delay='0.1s'>Skill</MenuItem>
          <MenuItem delay='0.2s'>Experience</MenuItem>
          <MenuItem delay='0.3s'>Contact Me</MenuItem>
          <MenuItem delay='0.4s'>Project</MenuItem>
        </ul>
      </ModalContent>
    </ModalContainer>
  );
};

export default CategoryModal;
