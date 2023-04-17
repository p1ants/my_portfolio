// components/Header/Header.tsx
import React from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  HomeButton,
  HomeIcon,
  CategoriesButton,
  IconLine,
} from './Header.styles';

const Header: React.FC = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/');
  };

  const openCategories = () => {
    // 카테고리 선택 창을 여는 로직을 여기에 구현하세요.
    console.log('카테고리 선택 창을 여는 기능을 구현하세요.');
  };

  return (
    <Container>
      <HomeButton onClick={goToHomePage}>
        <HomeIcon />
        <HomeIcon />
        <HomeIcon />
      </HomeButton>
      <CategoriesButton onClick={openCategories}>
        <IconLine />
        <IconLine />
      </CategoriesButton>
    </Container>
  );
};

export default Header;
