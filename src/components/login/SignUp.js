import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './signup.module.css'
import image from './../../assets/people-2.jpg'
function SignUp() {
const [name,setname]=useState('');
const [username,setusername]=useState('');
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const nameHandler =(event)=>{
    setname(event.target.value)
}
const usernameHandler =(event)=>{
    setusername(event.target.value)
}
const emailHandler =(event)=>{
    setemail(event.target.value)
}
const passwordHandler =(event)=>{
    setpassword(event.target.value)
}
async function signuptoFireBase (event){
event.preventDefault();
const user={
    name:name,
    username:username,
    email:email,
    password:password
}
const response=await fetch('https://onlinestore-ce20c-default-rtdb.firebaseio.com/users.json',{
    method:'POST',
    body:JSON.stringify(user),
    headers:{}
})
}



    return (
   

        <div className={styles.row}>

            <img src={image} className={styles.image}/>
        <div  className={styles.formsign}>
        <div>
               <h1>sign up</h1>
               </div>
           <form onSubmit={signuptoFireBase}>
              
               <div className={styles.inputs}>
               <input type="text" placeholder="name" onChange={nameHandler}/>
               </div>
               <div className={styles.inputs}>
               <input type="text" placeholder="username" onChange={usernameHandler}/>
               </div>
               <div className={styles.inputs}>
               <input type="text" placeholder="email" onChange={emailHandler}/>
               </div>
               <div className={styles.inputs}>
               <input type="text" placeholder="password" onChange={passwordHandler}/>
               </div>
               <div className={styles.inputs}>
            <button type="submit">sign up</button>
              <Link to="/" style={{ textDecoration: 'none' }}><p > <i class="fas fa-sign-out-alt"></i> go back to home</p></Link>
              </div>
           </form>
           </div>
           </div>
    )
}

export default SignUp
