import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function OverLay(props){
    return(
        <React.Fragment>
        <div id="myModal" className={classes.backdrop}></div>
        <div className={classes.modal}>
       {props.children}
        </div>
        </React.Fragment>
     
    );
}

function Modal(props){
return(
   <React.Fragment>
   { ReactDOM.createPortal( <OverLay>{props.children}</OverLay>,document.getElementById('overlay'))  }
      </React.Fragment>
)
}
export default Modal;