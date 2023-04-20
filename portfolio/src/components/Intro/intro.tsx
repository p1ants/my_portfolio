// components/Intro/Intro.tsx
import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { Container, AnimatedText } from './Intro.styles';

const textList = [
  '안녕하세요',
  // 'intro 랄게 없는데...',
  '대표님 그냥 저 써주시면 안되요?',
  '저 숨 잘쉬어요.',
  '힝...',
];

export default function Intro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    config: { duration: 1000 },
  });

  return (
    <Container>
      {transitions((style, i) => (
        <animated.div style={style} key={i}>
          <AnimatedText>{textList[i]}</AnimatedText>
        </animated.div>
      ))}
    </Container>
  );
}
