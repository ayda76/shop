import React from 'react'
import { Link } from 'react-router-dom'
import styles from './signup.module.css'
function SignUp() {
    return (
        <div>
           <form className={styles.formsign}>
               <div className={styles.inputs}>
               <input type="text" placeholder="name"/>
               </div>
               <div className={styles.inputs}>
               <input type="text" placeholder="username"/>
               </div>
               <div className={styles.inputs}>
               <input type="text" placeholder="email"/>
               </div>
               <div className={styles.inputs}>
               <input type="text" placeholder="password"/>
               </div>
               <div className={styles.inputs}>
              <Link to="/login"><button>sign up</button></Link> 
              </div>
           </form>
        </div>
    )
}

export default SignUp
