import { useState } from 'react';

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const resetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    handleInputChange,
    resetForm
  };
};

export default useForm;
