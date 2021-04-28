# useToggle

### Easily Managing toggle states of your react app

## Usage

```jsx
import React from 'react';
import { useToggle } from 'fork-react-hooks';

const App = () => {
  const [isOn, setIsOn] = useToggle();
  return (
    <>
      <div>
        <h1>useToggle Hook</h1>
        {isOn ? (
          <img src='https://www.w3schools.com/js/pic_bulbon.gif' alt='bulb' />
        ) : (
          <img src='https://www.w3schools.com/js/pic_bulboff.gif' alt='bulb' />
        )}
      </div>
      <button onClick={() => setIsOn(!isOn)}>
        Bulb is {isOn ? 'ON' : 'OFF'}
      </button>
    </>
  );
};

export default App;
```
