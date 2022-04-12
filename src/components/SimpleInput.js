import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    isValid: nameValueIsValid,
    enteredValueHandler: enteredNameHandler,
    blurHandler: onNameBlurHandler,
    reset: resetNameValue,
  } = useInput((value) => {
    return value.trim() !== '';
  });

  const {
    enteredValue: enteredEmail,
    isValid: emailValueIsValid,
    enteredValueHandler: enteredEmailHandler,
    blurHandler: onEmailBlurHandler,
    reset: resetEmailValue,
  } = useInput((value) => {
    return value.includes('@');
  });

  const formIsValid = nameValueIsValid && emailValueIsValid;

  const inputFieldClasses = formIsValid
    ? 'form-control'
    : 'form-control invalid';

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    console.log(enteredEmail);

    if (!formIsValid) {
      return;
    }
    resetNameValue('');
    resetEmailValue('');
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
          onBlur={onNameBlurHandler}
        />
        {!nameValueIsValid && (
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
          onBlur={onEmailBlurHandler}
        />
        {!emailValueIsValid && (
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
