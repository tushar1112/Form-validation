import {useState} from 'react';
import validate from './validateInfo'

const useForm=()=>{
   
    const [values, setValues] = useState({
      username:'',
      email:'',
      password:'',
      password2:''  
   })  

  const [errors, setErrors] = useState({}) 

  const handleChange=e=>{
      setValues({
          ...values,[e.target.name]:e.target.value
      });
  };

 const handleSubmit=(e)=>{
     e.preventDefault();
     setErrors(validate(values));
    } 

return {handleChange,values,handleSubmit,errors}
};

export default useForm;

