import { Container,  } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Form from './components/Form';
import EditForm from './pages/EditForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <Router>
        <NavBar />
        <Container py={10} maxW={'container.xl'}>
            <Switch>
                <Route exact path="/">
                        <Home />
                </Route>
                <Route exact path="/new">
                    <Form/>
                </Route>
                <Route exact path="/edit/:ID">
                    <EditForm />
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
