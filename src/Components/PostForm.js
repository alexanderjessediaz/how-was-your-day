import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

const initialState = {
    title:"",
    content:""
}


class PostForm extends Component {

    state = initialState

  render() {
    return (
      <Form>
          <Form.Group>
            <Form.Label>Title for the day:</Form.Label>
            <Form.Control size="lg" type="text" />
            <Form.Label>Your day:</Form.Label>
            <Form.Control as="textarea" rows="20"/>
            <Button as="input" type="submit" value="submit"/>
          </Form.Group>
      </Form>
    )
  }
}
export default PostForm
