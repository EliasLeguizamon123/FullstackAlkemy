import React from 'react'
import Form from '../components/Form'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function DeleteForm() {
    const {ID} = useParams();
    const [data, setData] = useState();

    useEffect((ID) => {
        deleteFormByID(ID)
    },[])

    const deleteFormByID = async (ID) => {
        const response = await axios.get(`https://whispering-forest-95291.herokuapp.com/delete/${ID}`);
        const formData = await response.data;
        console.log(formData[0]);
        setData( formData[0] );
    }
    console.log(data);

    return (
        <div>
            <Form {...data} />
        </div>
    )
}

export default DeleteForm
