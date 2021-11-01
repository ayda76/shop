import React,{useState} from 'react'
import styles from './CartForm.module.css'

function CartForm(props) {
    
const [name,setName]=useState('');
const [phone,setPhone]=useState('');
const [postalcode,setPostalcode]=useState('');
const [address,setAddress]=useState('');
    const CTNameChange=(event)=>{
setName(event.target.value);
    }
    const CTAddressChange=(event)=>{
setAddress(event.target.value)
    }
    const CTPhoneChange=(event)=>{
setPhone(event.target.value)
    }
    const CTPostalCodeChange=(event)=>{
setPostalcode(event.target.value)
    }
const SubmitOrderForm =(event)=>{
event.preventDefault();
const newOrder={
    name:name,
    address:address,
    phone:phone,
    postalcode:postalcode
}

props.getOrder(newOrder);
}

    return (
        <div>
            <h2>Submit your order</h2>
            <form onSubmit={SubmitOrderForm} className={styles.form}>
                <input type="text" onChange={CTNameChange} placeholder="Customer Name"/>
                <input type="text" onChange={CTAddressChange} placeholder="Customer Address"/>
                <input type="text" onChange={CTPhoneChange} placeholder="Customer Phone Number"/>
                <input type="text" onChange={CTPostalCodeChange} placeholder="Customer PostalCode"/>
                <button type="button" onClick={props.onClose} className={styles.cancel}>Cancel</button>
                <button type="submit" className={styles.subButton}>Submit Order</button>
              

            </form>
        </div>
    )
}

export default CartForm
