# useFetch

### Fetch data using the Browser Fetch API, handle errors, and indicate loading status.

## Usage

```jsx
import React from 'react';
import { useFetch } from 'fork-react-hooks';

const App = () => {
  const { error, loading, data = {} } = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading ...</h1>;

  return (
    <div>
      <h1>useFetch Hook</h1>
      {data?.map((todo) => {
        const { title, completed } = todo;

        return (
          <div key={todo.id}>
            <p>title : {title}</p>
            <p>completed : {completed ? 'YES' : 'NO'}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default App;
```
