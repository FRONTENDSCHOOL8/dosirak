import { useRef } from 'react';

const useIntersectionObserver = (callback) => {
  const options = { threshold: 0.1 };
  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  };

  const observer = useRef(
    new IntersectionObserver(intersectionCallback, options)
  );

  const observe = (element) => observer.current.observe(element);
  const unobserve = (element) => observer.current.unobserve(element);

  return [observe, unobserve];
};

export default useIntersectionObserver;
