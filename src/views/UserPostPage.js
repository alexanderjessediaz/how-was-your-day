import React, { Component } from 'react';
import PostContainer from '../Containers/PostContainer'
import PostForm from '../Components/PostForm';

import { Container, Row } from "react-bootstrap";

const postUrl = "http://localhost:4000/posts";




class UserPostPage extends Component {
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

        fetch(postUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newPost)
        })
      } 

      deletePost = (id) => {
        let filtered = this.state.posts.filter(post => post.id !== id)
        this.setState({
          posts: filtered
        })

        fetch(postUrl + "/" + id, {method:"DELETE"})
      }

      
    render(){
        return(
            <>
              <Container fluid>
                <Row>
                  <PostForm addPost={this.addPost}/>
                </Row>
                <Row>
                  <PostContainer
                   posts={this.state.posts}
                   deletePost={this.deletePost}
                  />
                </Row>
              </Container>
            </>
        )
    }
}

export default UserPostPage