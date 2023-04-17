// pages/index.tsx
import React from 'react';

//스타일
import { Container } from './index.style';
import Name from '@/components/Name';

const MainPage: React.FC = () => {
  return (
    <>
      <Container>
        <Name />
      </Container>
    </>
  );
};

export default MainPage;
