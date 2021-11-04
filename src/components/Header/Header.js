import React ,{useContext,useState}from 'react';
import CartButton from './CartButton/CartButton';
import classes from './header.module.css';
import CollectionContext from '../../store/context-collection';
import Menu from './Menu/Menu';
import Search from './Search/Search';
import {Link} from 'react-router-dom'
import UserContext from '../../store/context-userlog';


function Header(props){
   

    const context = useContext(UserContext)
    const ctx= useContext(CollectionContext);
   const date= new Date();
   console.log(date.toString())
   const day=date.getDate();
   const month=date.getMonth();
   const year=date.getFullYear();
 
    return(
      
            <div className={classes.header}>
                <div className={classes.headerItems.date}><i class="far fa-calendar-alt"></i>{`${year}.${month}.${day}`}</div>
               <Link to="/products"> <div className={classes.headerItems}><Menu/></div></Link>
                <div className={classes.headerItems}><Search/></div>
                <div className={classes.headerItems}><Link to="/login"><div className={classes.icon}><i className="fas fa-user"></i> sign in</div></Link> </div>
                
                <div className={classes.headerItems}><CartButton onClick={props.onClick}/></div>
               <Link to="/" style={{ textDecoration: 'none' ,color:'white' }}> <div className={classes.headerItems}>{context.user.name} <i class="fas fa-home"></i></div></Link>

            </div>
         
    );

   
}
export default Header;