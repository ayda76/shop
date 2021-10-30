import React from 'react'
import {Link } from 'react-router-dom'
import styles from './login.module.css'
import image from './../../assets/city-4991094_1920.jpg'
import { style } from 'dom-helpers'
function login() {
    return (
        <div className={styles.row}>
            <img src={image} className={styles.image}/>
            <div className={styles.formlogin}>
                <h1>LogIn</h1>
           <form >
               <div className={styles.inputs}>
               <input type="text" placeholder="username or email"/>
               </div>
               <div  className={styles.inputs}>
               <input type="text" placeholder="password"/>
               </div>
               <div  className={styles.inputs}>
               <button >login</button>
             <Link to="/signup" style={{ textDecoration: 'none' }}>  <p>don't have account?sign up</p></Link>
             <Link to="/" style={{ textDecoration: 'none' }}><p><i class="fas fa-sign-out-alt"></i>home</p></Link>
             </div>

           </form>
           </div>
        </div>
    )
}

export default login
