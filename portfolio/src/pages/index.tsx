// pages/index.tsx
import React from 'react';
import { useRouter } from 'next/router';

const MainPage: React.FC = () => {
  const router = useRouter();

  const goToAboutPage = async () => {
    await router.push('/about');
  };

  return (
    <div>
      <h1>안녕하세요, 메인 페이지입니다!</h1>
      {/* 메인 페이지의 다른 컴포넌트와 내용을 이곳에 추가하세요 */}
      <button onClick={goToAboutPage}>About 페이지로 이동</button>
    </div>
  );
};

export default MainPage;
