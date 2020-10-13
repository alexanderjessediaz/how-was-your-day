import React, {Component} from 'react';
import UserPost from "./UserPost"
import "../Styling/PostContainer.css"



const postUrl = "http://localhost:4000/posts";


class PostContainer extends Component {

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

  renderPosts = () =>{
    return this.state.posts.map(post=> <UserPost key={post.id} {...post}/>)
  }
  
  render(){
    return (
      <ul className="post-container">
          {this.renderPosts()}
      </ul>
    );
  }
}

export default PostContainer