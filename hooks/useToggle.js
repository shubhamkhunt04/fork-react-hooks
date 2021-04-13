import { useState } from 'react';

const useToggle = (active = false) => {
  const [toggle, setToggle] = useState(active);
  return [toggle, setToggle];
};

export default useToggle;
