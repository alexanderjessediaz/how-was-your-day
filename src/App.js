import React from 'react';

import {Container} from "react-bootstrap";
import { NavBar, Loading} from "./Components";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        
         
        
      </Container>
    </div>
  );
}

export default App;
