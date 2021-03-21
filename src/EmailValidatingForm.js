import React,{useEffect, useState, useReducer} from 'react';
import useEmailValidation from './useEmailValidation';


function EmailValidatingForm(){

  const [isLoading, setIsLoading] = useState(true);
  const {setEmail, count, email, emailValid, setCount} = useEmailValidation(30)

  useEffect(()=>{
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
    });
  })

 return (
   <div className="container">
      {isLoading && (
        <div className="row">
          Loading page
        </div>
      )}
      {!isLoading && (
        <div className="row">
          <div className="col-xs-2">
            <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} disabled={count<0} value={email} />
            <br/>
            <span>
              { count>0
                ?`Time remaining: ${count}`
                : "your time has expired"
              }
            </span>
          </div>
          <div className="col-xs-2">
            <button type="Submit" disabled={!emailValid || count<0}>Subscribe</button>
          </div>
        </div>
      )}

    </div>
  )
}


export default EmailValidatingForm;
