// pages/index.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// 스타일
import { Container } from './index.style';
//컴포넌트
import Name from '@/components/name/Name';
const MainPage: React.FC = () => {
  const router = useRouter();
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/skill') {
        setReverse(true);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <Container>
      <Name />
      {/* 다른 컴포넌트와 내용을 이곳에 추가하세요 */}
    </Container>
  );
};

export default MainPage;
