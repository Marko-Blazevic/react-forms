import { useRef, useState, useEffect } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [checkEnteredName, setCheckEnteredName] = useState(false);
  const [inputWasTouched, setInputWasTouched] = useState(false);
  const inputValueRef = useRef();

  useEffect(() => {
    if (checkEnteredName) {
      console.log('from useEffect ');
    }
  }, [checkEnteredName]);

  const enteredNameHandler = (event) => {
    setInputWasTouched(true);
    setEnteredName(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputWasTouched(true);
    setCheckEnteredName(true);

    console.log(enteredName);

    const enteredValue = inputValueRef.current.value;
    setEnteredName(enteredValue);

    if (enteredName.trim() === '') {
      return;
    }
    setEnteredName('');
    setInputWasTouched(false);
    setCheckEnteredName(false);
  };

  const nameInputClasses =
    !checkEnteredName && !inputWasTouched
      ? 'form-control'
      : 'form-control invalid';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={inputValueRef}
          type='text'
          id='name'
          value={enteredName}
          onChange={enteredNameHandler}
        />
        {checkEnteredName && inputWasTouched && (
          <p className='error-text'>Name field must be entered.</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
