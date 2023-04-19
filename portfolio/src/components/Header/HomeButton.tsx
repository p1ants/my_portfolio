// components/Header/HomeButton.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { HomeButton, HomeIcon } from './Header.styles';

const HomeButtonComponent: React.FC = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <HomeButton onClick={goToHomePage}>
      <HomeIcon />
      <HomeIcon />
      <HomeIcon />
    </HomeButton>
  );
};

export default HomeButtonComponent;
