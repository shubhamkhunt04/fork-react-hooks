# useDarkMode

### Easily implement and add dark mode and theme to your React app with this custom hook.

## Usage

```jsx
import React from 'react';
import { useToggle, useDarkMode } from 'fork-react-hooks';

const App = () => {
  const style = {
    backgroundColor: 'black',
    color: 'white',
  };
  const [mode, setMode] = useDarkMode(style);
  const [isOn, setIsOn] = useToggle(false);

  const onClickHandler = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
    setIsOn(!isOn);
  };

  return (
    <div>
      <h1>useDarkMode Hook</h1>
      {mode && <h1>DarkMode is {isOn ? 'ON' : 'OFF'}</h1>}
      <button onClick={onClickHandler}>
        {isOn
          ? 'Hey Shubham, click me to turnoff dark mode'
          : 'Hey Shubham, click me to turn on dark mode'}
      </button>
    </div>
  );
};

export default App;
```
