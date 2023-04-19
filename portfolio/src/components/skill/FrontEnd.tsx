import React, { useRef } from 'react';
import { useDrag } from 'react-use-gesture';
import { useSpring, animated } from 'react-spring';
import {
  Container,
  MainCircle,
  Line,
  ConnectedCircle,
  CircleLabel,
} from './FrontEnd.styles';


const FrontEnd: React.FC = () => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  const bind = useDrag(({ movement: [mx, my] }) => set({ x: mx, y: my }));

  return (
    <Container>
      <animated.div {...bind()} style={{ x, y }}>
        <MainCircle>
          <CircleLabel>FrontEnd</CircleLabel>
        </MainCircle>
        {['React', 'JavaScript', 'HTML', 'CSS', 'Next.js', 'TypeScript'].map((skill, index) => (
          <React.Fragment key={skill}>
            <Line index={index} />
            <ConnectedCircle index={index}>
              <CircleLabel>{skill}</CircleLabel>
            </ConnectedCircle>
          </React.Fragment>
        ))}
      </animated.div>
    </Container>
  );
};

export default FrontEnd;
