import React, { Component } from 'react';
import PostContainer from '../Containers/PostContainer'
import PostForm from '../Components/PostForm';
import {RailsSignUpForm} from '../AuthComponents'

import { Container, Row } from "react-bootstrap";

const postUrl = "http://localhost:4000/posts";
const userURL = "http://localhost:4000/users";




class UserPostPage extends Component {
    state = {
        posts:[],
        user:{},
        alerts:[]
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
          body: JSON.stringify({post: newPost})
        })
      } 

      updatePost = (updatedPost) => {
        let posts = this.state.posts.map(post => post.id === updatedPost.id ? updatedPost: post)

        this.setState({posts})

        fetch(postUrl + "/" + updatedPost.id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({post:updatedPost})
        })
      }

      deletePost = (id) => {
        let filtered = this.state.posts.filter(post => post.id !== id)
        this.setState({
          posts: filtered
        })

        fetch(postUrl + "/" + id, {method:"DELETE"})
      }

      signUp = (user) => {
        fetch(userURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(res => {
            if(res.errors){
                this.setState({alerts: res.errors})
            }
            else {
                this.setState({
                    user: res.user,
                    alerts: ["User successfully created!"]
                })
            }
        })
     }

      
    render(){
        return(
            <>
              <Container fluid>
              <RailsSignUpForm signUp={this.signUp}/>
                <Row>
                  <PostForm submitAction={this.addPost}/>
                </Row>
                <Row>
                  <PostContainer
                   updatePost={this.updatePost}
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