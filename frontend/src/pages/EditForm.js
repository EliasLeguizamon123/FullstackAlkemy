import React from 'react'
import Form from '../components/Form'
import {useState, useEffect} from 'react';
import axios from 'axios';

const EditForm = (form) => {
    const [data, setData] = useState();
    const {ID} = form;

    useEffect((ID) =>{
        updateFormById(ID);
    },[])

    const updateFormById = async ID => {
        try{
            const response = await axios.put(`https://whispering-forest-95291.herokuapp.com/update/${ID}`)
            const formData = await response.data;
            console.log(formData[0]);
            setData( formData[0] );
        }
        catch(err){
            console.log(err);
        }
    }
    console.log(data);
    return (
        <div>
            <Form {...data}/>
        </div>
    )
}

export default EditForm;
