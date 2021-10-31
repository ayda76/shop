import React,{useState,useContext} from 'react'
import {Link } from 'react-router-dom'
import styles from './login.module.css'
import image from './../../assets/city-4991094_1920.jpg'
import UserContext from '../../store/context-userlog'
function Login() {
    const ctx = useContext(UserContext);
const [users, setusers] = useState([]);
const [username, setusername] = useState('');
const [password, setpassword] = useState('');
const [loggedIn, setLoggedin] = useState(false);
const [logProblem, setLogProblem] = useState(true);


const usernameHndler=(event)=>{
    setusername(event.target.value);
}
const passwordHndler=(event)=>{
    setpassword(event.target.value);
}
async function checkUserLogin (event){
    event.preventDefault();
    const response=await fetch('https://onlinestore-ce20c-default-rtdb.firebaseio.com/users.json');
  const data=await response.json();
  let userslist=[]
  for( const key in data){
userslist.push({
    name:data[key].name,
    username:data[key].username,
    email:data[key].email,
    password:data[key].password
})
  }
setusers(userslist);

const user={
    username:username,
    password:password
}

for(let i in users){
    if(users[i].username===user.username&& users[i].password===user.password){
     setLoggedin(true);
     ctx.callUser(users[i]);


    }else if(i===users.length && users[i].username!==user.username&& users[i].password===user.password){
setLogProblem(false);
    }
}
}
    return (
        <div className={styles.row}>
            <img src={image} className={styles.image}/>
            <div className={styles.formlogin}>
                <h1>LogIn</h1>
           <form onSubmit={checkUserLogin}>
               <div className={styles.inputs}>
               <input type="text" placeholder="username or email" onChange={usernameHndler}/>
               </div>
               <div  className={styles.inputs}>
               <input type="text" placeholder="password" onChange={passwordHndler}/>
               </div>
               <div  className={styles.inputs}>
               <button >login</button>
             <Link to="/signup" style={{ textDecoration: 'none' }}>  <p>don't have account?sign up</p></Link>
             <Link to="/" style={{ textDecoration: 'none' }}><p><i class="fas fa-sign-out-alt"></i>home</p></Link>
             </div>

           </form>
           {
             loggedIn&&  <p style={{color:'green'}}>you are logged in  successfully!</p>  
           }
           {!logProblem&& <p style={{color:'red'}}>!!!!your information is not valid!!!!</p>}
           </div>
        </div>
    )
}

export default Login
