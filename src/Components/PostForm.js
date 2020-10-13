import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


class PostForm extends Component {

    state = {
        title:"",
        content:""
    }

    componentDidMount(){
        const {post} = this.props
        if(this.props.post){
            const {title,content} = post
            this.setState({title, content})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Title for the day:</Form.Label>
                    <Form.Control size="lg" type="text" />
                    <Form.Label>Your day:</Form.Label>
                    <Form.Control as="textarea" rows="20"/>
                    <Button as="input" type="submit" value="submit" onClick={this.handleSubmit}/>
                </Form.Group>
            </Form>
        )
    }
}
export default PostForm
