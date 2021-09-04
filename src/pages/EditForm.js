import React from 'react'
import Form from '../components/Form'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const EditForm = () => {
    const [data, setData] = useState();
    let {ID} = useParams();
    useEffect(() =>{
        getFormById(ID);
    },[])

    const getFormById = async ID => {
        try{
            const response = await axios.get(`https://whispering-forest-95291.herokuapp.com/get/${ID}`)
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
            {data && <Form {...data}/>}
        </div>
    )
}

export default EditForm;
