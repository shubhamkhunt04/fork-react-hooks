# useLocalStorage

### Sync React state to localStorage.

## Usage

```jsx
import React from 'react';
import { useLocalStorage } from 'fork-react-hooks';

const App = () => {
  const [name, setName] = useLocalStorage('name', 'shubham');

  return (
    <div>
      <h1> LocalStorage Hook</h1>
      <h1>{name}</h1>
      <input
        value={name}
        type='text'
        onChange={(e) => setName(e.target.value)}
      />
      <p>Local Storage Item</p>
      <p>
        Please clear the localStorage and refresh the webpage to see
        localStorage values
      </p>
      {JSON.stringify(localStorage)}
    </div>
  );
};

export default App;
```
