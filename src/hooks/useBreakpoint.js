import React, {useState, useEffect} from 'react';

const getDeviceConfig = (width) => {
  if (width >= 320 && width < 375) {
    return 'xs';
  } else if(width >= 375 && width < 768 ) {
    return 'sm';
  } else if(width >= 768 && width <= 1024) {
    return 'md';
  } else if(width > 1024) {
    return 'lg';
  }
};

const useBreakpoint = (isBrowser) => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(isBrowser && window.innerWidth));
  
  useEffect(() => {
    const calcInnerWidth = () => {
      setBrkPnt(getDeviceConfig(isBrowser && window.innerWidth))
    }; 
    isBrowser && window.addEventListener('resize', calcInnerWidth);
    return () => isBrowser &&  window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
}

export default useBreakpoint