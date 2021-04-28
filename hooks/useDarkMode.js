import { useEffect } from 'react';
import { useLocalStorage } from 'fork-react-hooks';

const useDarkMode = (customStyle) => {
  const [mode, setMode] = useLocalStorage('mode', 'light');
  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#0D1117';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

    if (customStyle && mode === 'dark') {
      Object.assign(document.body.style, customStyle);
    }

    // Only call again if customStyle object and mode reference changes
  }, [customStyle, mode]);

  return [mode, setMode];
};

export default useDarkMode;
