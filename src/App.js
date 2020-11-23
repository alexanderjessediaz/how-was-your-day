import React, { Component } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import PostForm from './Components/Post/PostForm'
import JournalFavicon from "./Images/journalfavicon.png"
// import JournalContainer from './Images/Journal-container-image.png'
import "./Styling/App.css";

const initialState = {
  title:"",
  content:"",
  update: false
}

class App extends Component {
  state = initialState

  componentDidMount(){
      const {post} = this.props
      if(this.props.post){
          const {id, title,content,update} = post
          this.setState({
              id,
              title,
              content,
              update
          })
      }
  }
  
  handleChange = (e) => {
      let {name,value, checked} = e.target

      value = (name === "update")? checked : value
      this.setState({
          [name]: value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.submitAction(this.state)
      if(this.props.handleToggle){
          this.props.handleToggle()
      }
  }

  showUpdateCheckbox = () => {
      return this.props.post 
          ? (
              <div className="update-btn">
                  <label>Update</label>
                  <input 
                      type="checkbox" 
                      name="update"  
                      checked={this.state.update} 
                      onChange={this.handleChange}/>
              </div>
          ) : null
  }
  
  
  render(){
    // const {title, content} = this.state
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
              Sign-in
            </Nav.Link>
          </Nav>
        </Navbar>
        <PostForm/>

      
      </div>
    );
  }
}

export default App;
