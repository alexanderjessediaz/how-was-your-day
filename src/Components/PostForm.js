import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import '../Styling/PostForm.css';

const initialState = {
    title:"",
    content:"",
    update: false
}


class PostForm extends Component {

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

  
    render() {
        const {title, content} = this.state
        return (
            <Form className="post-form" onSubmit={this.handleSubmit}>
                {this.props.post ? <h3>Edit Post</h3>: <h3>Create a Post</h3>}
                <Form.Group>
                    <Form.Label>Title for the day:</Form.Label>
                    <Form.Control size="lg" name="title" type="text" value={title} onChange={this.handleChange} />
                    <Form.Label>Your day:</Form.Label>
                    <Form.Control as="textarea" name="content" rows="20" value={content} onChange={this.handleChange}/>
                    <Button as="input" type="submit" value="submit" />

                </Form.Group>
                    {this.showUpdateCheckbox()}
            </Form>
        )
    }
}
export default PostForm
