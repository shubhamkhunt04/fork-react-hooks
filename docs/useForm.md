# useForm

### Easily handle form event using this custom form hook.

## Usage

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
