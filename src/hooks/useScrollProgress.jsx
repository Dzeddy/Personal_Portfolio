import { useEffect, useState } from 'react';

const useScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (totalScroll / windowHeight) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scroll;
};

export default useScrollProgress;
