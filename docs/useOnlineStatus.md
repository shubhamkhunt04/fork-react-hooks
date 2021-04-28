# useOnlineStatus

### Easily check online status of user(online/offline) using browser API.

## Usage

```jsx
import React from 'react';
import { useOnlineStatus } from 'fork-react-hooks';

const App = () => {
  const isUserOnline = useOnlineStatus();

  return (
    <div>
      <h1>OnlineStatus Hook</h1>
      {isUserOnline ? (
        <h3>Hey Shubham, You are online</h3>
      ) : (
        <h3>Hey Shubham, You are offline</h3>
      )}
    </div>
  );
};

export default App;
```
