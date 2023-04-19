// components/Header/Header.tsx
import React from 'react';
import { Container } from './Header.styles';
import HomeButtonComponent from './HomeButton';
import CategoriesButtonComponent from './CategoriesButton';

const Header: React.FC = () => {
  return (
    <Container>
      <HomeButtonComponent />
      <CategoriesButtonComponent />
    </Container>
  );
};

export default Header;
