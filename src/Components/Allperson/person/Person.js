import React from 'react';
import { AddTolocalstorage, RemoveCartFromDatabase } from './PersonLocalstorage';
const Person = (props) => {
    const {name,city,id,price} = props.allInfo


const ID_event = (proid) =>{
   // console.log(proid);

    AddTolocalstorage(proid)
   // localStorage.setItem(proid, name)
    }


    const removertcart =(removeID) =>{

        RemoveCartFromDatabase(removeID)

console.log('remove this value from cart',removeID);
    }
    
    return ( 
       
        <div>
            
            <h1>Tolal price : {price}</h1>
            <h1>ID : {id}</h1>
            <h2>name is :{name} </h2>
            <h4>Location :{city} </h4>
            <p id='showJander'> </p> <br />
            <button onClick={() => ID_event(id)}>Show ID  Event</button>
            <button onClick={() =>removertcart(id)}>Remove cart</button>

        </div>
    );
};

export default Person;