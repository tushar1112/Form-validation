export default function validateInfo(values) {
  
 let errors={};

 if(!values.username.trim()) {
    errors.username='Username required'
 }    
 
 if(!values.email){
     errors.email='Email Required'
 }else if(!/\S+@\S+\.\S+/.test(values.email)){
     errors.email='Email address is invalid'
 }

 if(!values.password.trim()){
    errors.password='password required(without space)'
 }else if(values.password.length<6){
  errors.password='At least 6 characters required'
 }
 
 if(!values.password2.trim()){
    errors.password2='password required(without space)'
 }else if(values.password2!==values.password){
  errors.password2='password dont match'
 }


if(errors.username) values.username=''
if(errors.email) values.email=''
if(errors.password) values.password=''
if(errors.password2) values.password2=''

if( (!errors.username) && (!errors.email) && (!errors.password) && (!errors.password2) )
 console.log(values);
 
return errors;
}