import React, { Component } from 'react';
import { Navbar, Nav,} from 'react-bootstrap';
import PostForm from './Components/Post/PostForm'
import JournalFavicon from "./Images/journalfavicon.png";
import  SignUpModal from "./AuthComponents/SignUpModal"
import "./Styling/App.css";

const postUrl = "http://localhost:4000/posts";

class App extends Component {
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
  
  
  render(){
    
    return (
      <div className="App">
         <Navbar bg="dark" variant="dark">
         <Nav className="mr-auto">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={JournalFavicon}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              HWYD
            </Navbar.Brand>
         </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#">
              <SignUpModal/>
            </Nav.Link>
          </Nav>
        </Navbar>
        <PostForm/>
      </div>
    );
  }
}

export default App;
