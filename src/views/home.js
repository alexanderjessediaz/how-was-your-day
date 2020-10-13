import React, { Component, Fragment } from "react";

import PostForm from "../Components/PostForm";
import Hero from "../Containers/Hero"


const postUrl = "http://localhost:4000/posts";

class Home extends Component {

  state = {
    posts:[]
  };

  componentDidMount(){
    this.getPosts()
  };

  getPosts = () => {
    fetch(postUrl)
      .then(response => response.json())
      .then(posts => this.setState({posts}))
  };

  addPost = (newPost) => {
    this.setState({
      posts: [...this.state.posts, newPost]
    })
  } 

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