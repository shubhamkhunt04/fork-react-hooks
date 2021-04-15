import { useEffect, useState } from 'react';

const getSavedValue =(key,initialValue)=>{
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;
  
  // If value passed is a function, evaluating the function.
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

const useLocalStorage = (key , initialValue) => {

  const [value, setValue] = useState(() => {
    // check for server side rendering (Next.js)
    if(typeof localStorage===undefined) throw new Error('localStorage does not exist');

    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    // setting items in localstorage
    localStorage.setItem(key, JSON.stringify(value));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
