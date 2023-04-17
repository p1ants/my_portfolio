// pages/index.tsx
import React from 'react';
import { useRouter } from 'next/router';

//스타일
import { Container } from './index.style';
import Name from '@/components/Name';

const MainPage: React.FC = () => {
  const router = useRouter();

  const goToAboutPage = async () => {
    await router.push('/about');
  };

  return (
    <Container>
      <Name />
      {/* 메인 페이지의 다른 컴포넌트와 내용을 이곳에 추가하세요 */}
      {/* <button onClick={goToAboutPage}>About 페이지로 이동</button> */}
    </Container>
  );
};

export default MainPage;
