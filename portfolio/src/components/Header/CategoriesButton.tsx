// components/Header/CategoriesButton.tsx
import React, { useState } from 'react';
import { CategoriesButton, IconLine } from './Header.styles';
import CategoryModal from './CategoryModal';

const CategoriesButtonComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCategories = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CategoriesButton onClick={openCategories}>
        <IconLine />
        <IconLine />
      </CategoriesButton>
      {isModalOpen && <CategoryModal />}
    </>
  );
};

export default CategoriesButtonComponent;
