import {useRef,useState} from 'react';



const SimpleInput = (props) => {

  const nameInputRef=useRef();
  const [enteredName,setEnteredName]=useState('');
  const [enteredNameIsValid,setEnteredNameIsValid]=useState(false);
  const [entereNameTouched,setEnteredNameTouched]=useState(false);


  const nameInputChangeHandler=event=>{
    setEnteredName(event.target.value);
  
  if(event.target.value.trim()!==''){
    setEnteredNameIsValid(true);
  }
  }

  const nameInputBlurHandler=event=>{
    setEnteredNameTouched(true);
    
    if(enteredName.trim()===''){
      setEnteredNameIsValid(false);
    
      return ;
    }
    
    };
    

  const formSubmissionHandler=event=>{
event.preventDefault();
setEnteredNameTouched(true);



if(enteredName.trim()===''){
  setEnteredNameIsValid(false);

  return ;
}else{
  setEnteredNameIsValid(true);
}
console.log(enteredName);
const enteredValue=nameInputRef.current.value;
console.log(enteredValue);
setEnteredName('');
  };

  const nameInputIsInvalid=!enteredNameIsValid&&entereNameTouched;
  const nameInputClasses=nameInputIsInvalid?'form-control invalid':'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} 
        onBlur={nameInputBlurHandler}
        value={enteredName}/>
      </div>
      {nameInputIsInvalid&&<p className="error=-text">invalid input</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
