import React, { Component, Fragment } from "react";

import { Hero, PostForm }  from "../Components";


class Home extends Component {

  render(){
    return (
      <Fragment>
        <Hero />
        <PostForm/>
      </Fragment>
    )
  }
};

export default Home;