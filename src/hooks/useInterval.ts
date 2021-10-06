import { useEffect, useRef } from 'react';

export const useInterval = (callback: Function, delay: number) => {
  const callbackRef = useRef({});

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      typeof callbackRef.current === 'function' && callbackRef.current();
    };

    if (delay) {
      const timer = setInterval(tick, delay);
      return () => clearInterval(timer);
    }
  });
};
