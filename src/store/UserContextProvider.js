import React,{useState} from 'react'
import UserContext from './context-userlog'
function UserContextProvider(props) {
   const[user,setuser]= useState([]);
   const callUser=(user)=>{
       setuser(user);
   }
const returnValue={
user:user,
callUser:callUser
}
    return (
        <UserContext.Provider value={returnValue}>{props.children}</UserContext.Provider>
    )
}

export default UserContextProvider
