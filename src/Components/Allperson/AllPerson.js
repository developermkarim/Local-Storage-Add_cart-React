import React from 'react';
import Person from './person/Person';

const AllPerson = () => {
   const identity = [{id:12,name:"Harry Potter","city":"London", price:4356},{id:13,"name":"Don Quixote","city":"Madrid"},{"name":"Joan of Arc",id:77,"city":"Paris", price:9126},{name:"Rosa Park","city":"Alabama",id:15, price:6342}]


   
    return (
        
        <div>
           
           
            {
                identity.map(singleID => <Person allInfo = {singleID}
                
              
                
                ></Person>)
            }
        </div>
    );
};

export default AllPerson;