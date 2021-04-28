# usePagination

### Easily implement client side pagination to your React app with this custom hook.

## Usage

```jsx
import React, { useState } from 'react';
import { usePagination } from 'fork-react-hooks';

const data = [
  {
    id: 1,
    name: 'shubham khunt',
    email: 'shubhamkhunt08@gmail.com',
  },
  {
    id: 2,
    name: 'ankit khunt',
    email: 'ankit08@gmail.com',
  },
  {
    id: 3,
    name: 'react hook',
    email: 'reacthook@gmail.com',
  },
  {
    id: 4,
    name: 'nodejs',
    email: 'nodejs15@gmail.com',
  },
  {
    id: 5,
    name: 'graphql',
    email: 'graphql2021@gmail.com',
  },
];

const App = () => {
  const [showPerPage, setShowPerPage] = useState(2);

  // pass data and showPerPage value
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    data,
    showPerPage
  );

  const currentPaginationData = currentData();

  return (
    <>
      <h1>usePagination Hook</h1>
      <label>Items per page : </label>
      <input
        type='number'
        name='showPerPage'
        onChange={(e) => setShowPerPage(e.target.value)}
        placeholder='Enter a number'
        width='500px'
        value={showPerPage}
      />
      {currentPaginationData.map((user) => {
        const { id, name, email } = user;
        return (
          <div key={id}>
            <h3>{id}</h3>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <br />
          </div>
        );
      })}

      <p>Current Page {currentPage}</p>
      <p>Maximum Page {maxPage}</p>
      <div>
        <label>
          Go To N<sup>th</sup> Page
        </label>
        <input
          type='number'
          name='jumpToNthPage'
          onChange={(e) => jump(e.target.value)}
          defaultValue='1'
          placeholder='Enter page number'
        />
      </div>
      <div>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default App;
```
