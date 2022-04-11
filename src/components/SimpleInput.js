import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const checkEnteredName = enteredName.trim() !== '';
  const trimmedEmail = enteredEmail.trim();
  const checkEnteredEmail =
    trimmedEmail !== '' && trimmedEmail.indexOf('@') > -1;

  let formIsValid = false;

  if (checkEnteredName && checkEnteredEmail) {
    formIsValid = true;
  }

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const onBlurHandler = () => {
    setInputWasTouched(true);
  };

  const inputFieldClasses =
    !checkEnteredName && !inputWasTouched
      ? 'form-control'
      : 'form-control invalid';

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputWasTouched(true);

    console.log(enteredName);
    console.log(enteredEmail);

    if (!checkEnteredName) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setInputWasTouched(false);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputFieldClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={enteredNameHandler}
          onBlur={onBlurHandler}
        />
        {!checkEnteredName && inputWasTouched && (
          <p className='error-text'>Please enter a name.</p>
        )}
      </div>
      <div className={inputFieldClasses}>
        <label htmlFor='email'>Your email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={enteredEmailHandler}
          onBlur={onBlurHandler}
        />
        {!checkEnteredEmail && inputWasTouched && (
          <p className='error-text'>Please enter an email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
