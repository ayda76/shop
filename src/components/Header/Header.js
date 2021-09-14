import React ,{useContext}from 'react';
import CartButton from './CartButton/CartButton';
import classes from './header.module.css';
import CollectionContext from '../../store/context-collection';
import Menu from './Menu/Menu';
import Search from './Search/Search';
function Header(props){
    const ctx= useContext(CollectionContext);
   const date= new Date();
   console.log(date.toString())
   const day=date.getDate();
   const month=date.getMonth();
   const year=date.getFullYear();
   
    return(
      
            <div className={classes.header}>
                <div className={classes.headerItems.date}><i class="far fa-calendar-alt"></i>{`${year}.${month}.${day}`}</div>
                <div className={classes.headerItems}><Menu/></div>
                <div className={classes.headerItems}><Search/></div>
                <div className={classes.headerItems}><div className={classes.icon}><i className="fas fa-user"></i> sign in</div> </div>
                
                <div className={classes.headerItems}><CartButton onClick={props.onClick}/></div>
               

            </div>
         
    );

   
}
export default Header;