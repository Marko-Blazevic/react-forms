import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');

  const {
    enteredValue: enteredName,
    error,
    isValid,
    enteredValueHandler: enteredNameHandler,
    blurHandler: onBlurHandler,
    reset,
  } = useInput((value) => {
    return value.trim() !== '';
  });

  // const trimmedEmail = enteredEmail.trim();
  // const checkEnteredEmail = trimmedEmail !== '' && trimmedEmail.includes('@');

  const inputFieldClasses = isValid ? 'form-control' : 'form-control invalid';

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    // console.log(enteredEmail);

    if (!isValid) {
      return;
    }
    reset('');
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
        {!isValid && <p className='error-text'>Please enter a name.</p>}
      </div>
      {/* <div className={inputFieldClasses}>
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
      </div> */}
      <div className='form-actions'>
        <button disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
