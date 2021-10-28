import React from 'react'
import {Link } from 'react-router-dom'
import styles from './login.module.css'
function login() {
    return (
        <div>
           <form className={styles.formlogin}>
               <div className={styles.inputs}>
               <input type="text" placeholder="username or email"/>
               </div>
               <div  className={styles.inputs}>
               <input type="text" placeholder="password"/>
               </div>
               <div  className={styles.inputs}>
               <button >login</button>
             <Link to="/signup">  <p>don't have account?sign up</p></Link>
             </div>

           </form>
        </div>
    )
}

export default login
