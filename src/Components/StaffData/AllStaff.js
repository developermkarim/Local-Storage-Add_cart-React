import React from 'react';
import { useState,useEffect } from 'react';
import Staff from './Staff';

const AllStaff = () => {
    const [staffs, Setstaffs] = useState([])

    useEffect(()=>{
        const url = 'StaffData.json'
        fetch(url).then(res => res.json()).then(data => Setstaffs(data))
    }, [])
    return (
        <div>
            <h5>stadd length : {staffs.length}</h5>
            {
                staffs.map(eachStaff => <Staff
               key = {eachStaff.id}
               staff_allInfo = {eachStaff}
               
               ></Staff>)
               
            }
        </div>
    );
};

export default AllStaff;