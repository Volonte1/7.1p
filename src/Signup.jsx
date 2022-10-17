import React, {useState} from 'react'
import Input from './Input'
import Button from './Button'
import './App.css'
import {Link} from 'react-router-dom'
import './Signup.css'
import { createAuthUserWithEmailAndPassword } from './utils/firebase'


const Signup = (props)=>{
    const [contact, setContact] = useState({
        name: '',
        email: '',
        password:'',
        confirmPassword:''
    })
    
    const {name,  email, password, confirmPassword } = contact


    const handleChange = (event)=>{
        const {name, value} = event.target

        setContact ((preValue) => {
            return{
                ...preValue,
            [name]: value
            }
        })
     }

     const handleSubmit = async(event) =>
     {
        event.preventDefault();

        if  (password !== confirmPassword){
            alert('Passwords do not match')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            
        }
        catch(error){
            console.log('error in creating user', error.message)
        }
     }
    

    return <div className='header-div'>

       <Input 
       name = "name"
       type ='text'
       placeholder = 'first name'
        onChange = {handleChange}
        value = {contact.name}
       /><br></br>

        <Input 
       name= "email"
       type ='email'
       placeholder = 'email'
        onChange = {handleChange}
        value = {contact.email}/>
        <br></br> 


       <Input 
       name = "password"
       type= "password"
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

<br></br> 

        <Input 
       name = "confirmPassword"
       type= "password"
       placeholder ='confirm password'
       onChange = {handleChange}
       value = {contact.confirmPassword}
       />

       <br></br>

       <button onClick={handleSubmit}>
       submit
       </button>

       <br></br>
       <br></br>

       <Link to='/Login'>
        Log In
       </Link>

    </div>
 }
export default Signup