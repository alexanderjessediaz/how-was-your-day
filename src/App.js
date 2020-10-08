import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, PrivateRoute } from "./Components";
import { Home, Profile, ExternalApi } from "./Views/Index";


class App extends Component {
  
  state = {
    posts:[]
  }

  render(){
    
    return (
      <div className="App">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/Profile" component={Profile} />
            <PrivateRoute path="/external-api" component={ExternalApi} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
