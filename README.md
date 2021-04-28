# Fork React Hooks !! ⚛

A npm package that contain collection of easy to use React custom hooks for your next React project.

- **useToggle**:
  [src](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/hooks/useToggle.js) / [doc](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/docs/useToggle.md)

  ```jsx
  import React from 'react';
  import { useToggle } from 'fork-react-hooks';

  const App = () => {
    const [isOn, setIsOn] = useToggle();
    return (
      <>
        <div>
          <h1>Toggle Hook</h1>
          {isOn ? (
            <img src='https://www.w3schools.com/js/pic_bulbon.gif' alt='bulb' />
          ) : (
            <img
              src='https://www.w3schools.com/js/pic_bulboff.gif'
              alt='bulb'
            />
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

- **useFetch**:
  [src](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/hooks/useFetch.js) / [doc](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/docs/useFetch.md)

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

- **useOnlineStatus**:
  [src](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/hooks/useOnlineStatus.js) / [doc](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/docs/useOnlineStatus.md)

  ```jsx
  import React from 'react';
  import { useOnlineStatus } from 'fork-react-hooks';

  const App = () => {
    const isUserOnline = useOnlineStatus();

    return (
      <div>
        <h1>OnlineStatus Hook</h1>
        {isUserOnline ? <h3>You are online</h3> : <h3>You are offline</h3>}
      </div>
    );
  };

  export default App;
  ```

- **useLocalStorage**:
  [src](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/hooks/useLocalStorage.js) / [doc](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/docs/useLocalStorage.md)

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

- **useDarkMode**:
  [src](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/hooks/useDarkMode.js) / [doc](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/docs/useDarkMode.md)

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
            ? 'Hey shubham, click me to off dark mode'
            : 'Hey shubham, click me to on dark mode'}
        </button>
      </div>
    );
  };

  export default App;
  ```

- **usePagination**:
  [src](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/hooks/usePagination.js) / [doc](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/docs/usePagination.md)

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
    const {
      next,
      prev,
      jump,
      currentData,
      currentPage,
      maxPage,
    } = usePagination(data, showPerPage);

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

- **useForm**:
  [src](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/hooks/useForm.js) / [doc](https://github.com/shubhamkhunt04/fork-react-hooks/blob/master/docs/useForm.md)

  ```jsx
  import React from 'react';
  import { useForm } from 'fork-react-hooks';

  const App = () => {
    const { formData, onInputChange, onFormSubmit } = useForm(
      registerUserCallback,
      {
        username: '',
        email: '',
        password: '',
      }
    );

    const { username, email, password } = formData;

    // arrow function not work so use function keyword
    function registerUserCallback() {
      // call register user
      console.log('register user data', formData);
      // send form data to API using axios or fetch and redirect user to another routes
    }

    return (
      <div>
        <h1>useForm Hook</h1>
        <form onSubmit={onFormSubmit}>
          <div>
            <label htmlFor='username'>Username :- </label>
            <input
              id='username'
              type='text'
              name='username'
              value={username}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Email :- </label>
            <input
              id='email'
              type='email'
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label htmlFor='password'>Password :- </label>
            <input
              id='password'
              type='password'
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };

  export default App;
  ```
