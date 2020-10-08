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
          <Form.Label>Your day:</Form.Label>
          <Form.Control as="textarea" rows="20"/>
          <Button as="input" type="submit" value="submit"/>
      </Form>
    )
  }
}
export default PostForm
