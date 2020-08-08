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

  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig((typeof window !== `undefined`) && window.innerWidth));
  
  useEffect(() => {
    const calcInnerWidth = () => {
      setBrkPnt(getDeviceConfig((typeof window !== `undefined`) &&  window.innerWidth))
    }; 
    (typeof window !== `undefined`) && window.addEventListener('resize', calcInnerWidth);
    return () => (typeof window !== `undefined`) &&  window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
}

export default useBreakpoint