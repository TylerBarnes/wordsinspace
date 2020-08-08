import React, {useState, useEffect} from 'react';

const getDeviceConfig = (width) => {
  if (width >= 320 && width < 375) {
    return 'xs';
  } else if(width >= 375 && width < 768 ) {
    return 'sm';
  } else if(width >= 768 && width < 1024) {
    return 'md';
  } else if(width >= 1024) {
    return 'lg';
  }
};

const useBreakpoint = () => {

  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));
  
  useEffect(() => {
    const calcInnerWidth = () => {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }; 
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  if (typeof window === `undefined`) return null
  return brkPnt;
}

export default useBreakpoint