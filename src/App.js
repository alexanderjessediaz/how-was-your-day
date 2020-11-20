import React from 'react';
// import { Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./Containers/NavBar";
// import RailsSignUpForm from "./Views/RailsSignUp"
import "./Styling/App.css"


const App = () => {
  
  
    
    return (
      <div className="App">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
        </Container>
      </div>
    );
  // }
}

export default App;
