import { useState } from 'react';

const useForm = (callback, initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  return { formData, onInputChange, onFormSubmit };
};

export default useForm;
