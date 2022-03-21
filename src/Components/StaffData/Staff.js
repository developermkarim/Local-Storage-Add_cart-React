import React from 'react';

const Staff = (props) => {
    const {id, age, email,name, gender,phone} = props.staff_allInfo;
    return (
        <div>
            
            <h2>Staff Name : {name}</h2>
            <h4>Staff ID : {id}</h4>
            <h5>age : {age}</h5>
            <small>Staff email : {email}</small>
            <address>Phone : {phone}</address>
            <address>Staff gender : {gender}</address>

        </div>
    );
};

export default Staff;