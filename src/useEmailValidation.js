import React,{useEffect, useState, useReducer} from 'react';
import useInterval from '@use-it/interval';

const useEmailValidation =({seconds}) =>{
    const validateEmail= (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const [emailValid, setEmailValid] = useState(false);

    const emailReducer = (state, action) => {
      const isValidEmail = validateEmail(action);
      setEmailValid(isValidEmail);
      return action;
    };

    const [email, setEmail] = useReducer(emailReducer,"");
    const maxSeconds = seconds;
    const [count, setCount] = useState(maxSeconds);

    useInterval(()=>{
      setCount(count-1);
    },1000);


    return {emailValid,email};
  };

  export default useEmailValidation;