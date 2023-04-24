// portfolio/src/pages/_app.tsx
import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import './cursor.css';

export default function App({ Component, pageProps }: AppProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX - 15, y: e.clientY - 100 });
  };

  const onPointerEnter = () => setIsPointer(true);
  const onPointerLeave = () => setIsPointer(false);

  useEffect(() => {
    const hoverElements = Array.from(
      document.querySelectorAll('li, button,img')
    );

    hoverElements.forEach((el) => {
      el.addEventListener('pointerenter', onPointerEnter);
      el.addEventListener('pointerleave', onPointerLeave);
    });

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener('pointerenter', onPointerEnter);
        el.removeEventListener('pointerleave', onPointerLeave);
      });

      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <Header />
      <div
        id='custom-cursor'
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
          width: isPointer ? '150px' : '50px',
          height: isPointer ? '150px' : '50px',
        }}
      ></div>
      <Component {...pageProps} />
    </>
  );
}
