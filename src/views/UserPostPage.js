import React, { Component } from 'react';
import PostContainer from '../Containers/PostContainer'
import PostForm from '../Components/PostForm';

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
      } 
    render(){
        return(
            <>
                <PostForm addPost={this.addPost}/>
                <PostContainer posts={this.state.posts}/>
            </>
        )
    }
}

export default UserPostPage