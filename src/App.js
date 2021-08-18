import { Container,  } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Form from './components/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';

function App() {
    const [forms, setForms] = useState([]);
    
    const fetchForms = async () => {
        try {
            const response = await axios
            .get('https://whispering-forest-95291.herokuapp.com')
            const data = await response.data;
            setForms(() => data);
            console.log(data);
        } catch (err) {
            throw err;
        }
    };

    useEffect(() => {
        fetchForms();
    }, []);

  return (
    <Router>
        <NavBar />
        <Container py={10}>
            <Switch>
                <Route exact path="/">
                    {forms.map(form => (
                        <Home key={form.ID} {...form} />
                    ))}
                </Route>
                <Route exact path="/new">
                    <Form/>
                </Route>
                <Route exact path="/edit/:id">
                    <Form />
                </Route>
                <Route exact path="/delete/:id">
                    <Form />
                </Route>
            </Switch>    
        </Container>
    </Router>
  );
}

export default App;
