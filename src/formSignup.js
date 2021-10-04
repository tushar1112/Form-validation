import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import UseForm from './useForm'
import './App.css';

const FormSignup=()=>{
   
    const [visibilityy, setVisibilityy] = useState('hidden')
    
    const TodoComponent = {
        visibility: visibilityy
    }
    
    const changeMode=()=>{
        setVisibilityy('visible')
    }

const {handleChange,values,handleSubmit,errors} =UseForm();
    
    return(
        
        <div className="container">
            <div className="header">
                <h2>Create Account</h2>
            </div>
            <form className="form" id="form"  onSubmit={handleSubmit}>
                
                <div className="form-control">
                    <label>Username</label>
                    <input  type="text" placeholder="tushar123"
                    id="username" name="username"
                    value={values.username}
                    onChange={handleChange}
                    />
                    
                    {(!errors.username)?  (<i className="faCheckCircle" style={TodoComponent} ><FontAwesomeIcon icon={faCheckCircle}/></i>):
                    (<i className="faExclamationCircle" ><FontAwesomeIcon icon={faExclamationCircle}/></i>)}
                    {errors.username &&  <small>{errors.username}</small>}
                </div>
                
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" placeholder="tushar123@gmail.com"
                    id="email" name="email"
                    value={values.email}
                    onChange={handleChange}
                    />
                    
                    
                    {(!errors.email)?  (<i className="faCheckCircle" style={TodoComponent} ><FontAwesomeIcon icon={faCheckCircle}/></i>):
                    (<i className="faExclamationCircle" ><FontAwesomeIcon icon={faExclamationCircle}/></i>)}
                    {errors.email &&  <small>{errors.email}</small>}
                </div>

                <div className="form-control">
                    <label>Password</label>
                    <input type="password" placeholder="Password"
                    id="password" name="password"
                    value={values.password}
                    onChange={handleChange}
                    />
                    
                    
                    {(!errors.password)?  (<i className="faCheckCircle" style={TodoComponent} ><FontAwesomeIcon icon={faCheckCircle}/></i>):
                    (<i className="faExclamationCircle" ><FontAwesomeIcon icon={faExclamationCircle}/></i>)}
                    {errors.password &&  <small>{errors.password}</small>}
                </div>

                <div className="form-control">
                    <label>Confirm password</label>
                    <input  type="password" placeholder="Confirm Password"
                    id="password2" name="password2"
                    value={values.password2}
                    onChange={handleChange}
                    />
                    
                    
                    {(!errors.password2)?  (<i className="faCheckCircle" style={TodoComponent} ><FontAwesomeIcon icon={faCheckCircle}/></i>):
                    (<i className="faExclamationCircle" ><FontAwesomeIcon icon={faExclamationCircle}/></i>)}
                    {errors.password2 &&  <small>{errors.password2}</small>}
                </div>
  
             <button onClick={changeMode} type="submit">Submit</button>
            </form>
    </div>


    );
}

export default FormSignup;