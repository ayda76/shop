
import React,{useContext,useState} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import CollectionContext from '../../store/context-collection'
import styles from './Silder.module.css'
function Silder() {

    const ctx = useContext(CollectionContext)
   // console.log("ppppppppp",ctx)
   const photos= ctx.items.map((item)=>(item.image));
   const defaultPicture=`${photos[photos.length-1]}`;
   const[image,setImage]= useState(defaultPicture);
   console.log("sssssss",`${photos[photos.length-1]}`)
const left=()=>{
    if(image===photos[photos.length-1]){
        setImage(photos[photos.length-2]);
    }else if(image===photos[photos.length-2]){
        setImage(photos[photos.length-3]);
    }else if(image===photos[photos.length-3]){
        setImage(photos[photos.length-1]);
    }

}
const right=()=>{
    if(image===photos[photos.length-1]){
        setImage(photos[photos.length-3]);
    }else if(image===photos[photos.length-2]){
        setImage(photos[photos.length-1]);
    }else if(image===photos[photos.length-3]){
        setImage(photos[photos.length-2]);
    }
  
}
let address=`./../../assets/${image}`;
console.log('adddreeeessss',image)
/* 
<button className={styles.button} onClick={left}><i class="fas fa-chevron-left"></i></button>
                <img  src={require(`./../../assets/${image}`).default} className={styles.images}/>
                <button className={styles.button} onClick={right}><i class="fas fa-chevron-right"></i></button>
*/
    return (
        <div className="row p-0">
            <div className="col-12 p-0">
            <div className={styles.images} style={{backgroundImage:`url("${address}")`}}>
                <button className={styles.buttonleft} onClick={left}><i class="fas fa-chevron-left"></i></button>
                <button className={styles.buttonright} onClick={right}><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

        </div>
    )
}

export default Silder
