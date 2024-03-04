import { cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

const AnimatedOutlet = () => {
  const location = useLocation();
  const element = useOutlet();
  // const router

  return (
    <TransitionGroup>
      <>{element && cloneElement(element, { key: location.pathname })}</>
    </TransitionGroup>
  );
};

export default AnimatedOutlet;
