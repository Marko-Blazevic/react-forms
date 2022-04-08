import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const checkEnteredName = enteredName.trim() !== '';

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputWasTouched(true);

    console.log(enteredName);

    if (!checkEnteredName) {
      return;
    }

    setEnteredName('');
    setInputWasTouched(false);
  };

  const onBlurHandler = () => {
    setInputWasTouched(true);
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
          type='text'
          id='name'
          value={enteredName}
          onChange={enteredNameHandler}
          onBlur={onBlurHandler}
        />
        {!checkEnteredName && inputWasTouched && (
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
