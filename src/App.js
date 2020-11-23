import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import NavBar from "./Containers/NavBar";
import "./Styling/App.css"


class App extends Component {
  
  render(){
    return (
      <div className="App">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
        </Container>
      </div>
    );
  }
}

export default App;
