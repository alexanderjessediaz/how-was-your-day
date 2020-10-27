import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import '../Styling/PostForm.css';

const initialState = {
    title:"",
    content:""
}


class PostForm extends Component {

    state = initialState

    componentDidMount(){
        const {post} = this.props
        if(this.props.post){
            const {title,content,update} = post
            this.setState({
                title,
                content,
                update
            })
        }
    }
    

    handleChange = (e) => {
        let {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state)
    }

    showDoneCheckbox = () => {
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
        let {title, content, update} = this.state
        return (
            <Form className="post-form" onSubmit={this.handleSubmit}>
                {this.props.post ? <h3>Edit Post</h3>: <h3>Create a Post</h3>}
                <Form.Group>
                    <Form.Label>Title for the day:</Form.Label>
                    <Form.Control size="lg" name="title" type="text" value={title} onChange={this.handleChange} />
                    <Form.Label>Your day:</Form.Label>
                    <Form.Control as="textarea" name="content" rows="20" value={content} onChange={this.handleChange}/>
                    <Button as="input" type="submit" value="submit"/>
                    {this.showDoneCheckbox()}

                </Form.Group>
            </Form>
        )
    }
}
export default PostForm
