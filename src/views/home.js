import React, { Component, Fragment } from "react";

import {Hero, PostContainer}  from "../Components";

const postUrl = "http://localhost:4000/posts";

class Home extends Component {

  state = {
    posts:[]
  }

  componentDidMount(){
    this.getPosts()
  }

  getPosts = () => {
    fetch(postUrl)
      .then(response => response.json())
      .then(posts => this.setState({posts}))
  }

  render(){
    return (
      <Fragment>
        <Hero />
        <PostContainer/>
      </Fragment>
    )
  }
};

export default Home;