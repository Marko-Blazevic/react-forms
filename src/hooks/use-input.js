import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [inputWasTouched, setInputWasTouched] = useState(false);

  let isValid = false;

  const valueIsValid = validateValue(enteredValue);
  if (!valueIsValid && inputWasTouched) {
    isValid = false;
  } else {
    isValid = true;
  }

  const enteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = () => {
    setInputWasTouched(true);
  };

  const reset = (value) => {
    setEnteredValue(value);
    setInputWasTouched(false);
  };

  return {
    enteredValue,
    // error,
    isValid,
    enteredValueHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
