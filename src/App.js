import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./Containers/NavBar";
import { PrivateRoute, Loading } from "./AuthComponents"
import { Home, Profile } from "./Views/index";
import { useAuth0 } from "@auth0/auth0-react";
import "./Styling/App.css"


const App = () => {
  
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
    
    return (
      <div className="App">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/Profile" component={Profile} />
            {/* <PrivateRoute path="/external-api" component={ExternalApi} /> */}
          </Switch>
        </Container>
      </div>
    );
  // }
}

export default App;
