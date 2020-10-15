import React, { Component, Fragment } from 'react';
import PostForm from '../Components/PostForm';
import Hero from '../Containers/Hero';




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