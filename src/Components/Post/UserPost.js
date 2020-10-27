import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import PostForm from '../PostForm'
import "../../Styling/UserPost.css"


function UserPost({id, title,content, deletePost, update}) {

  const post = {id, title, content, update}

  const [isToggled, setIsToggled] = useState(false)

  const handleClick = (e) => deletePost(id)

  const handleToggle = (e) => setIsToggled(!isToggled)

  const postCard = () => (

    <Card className="user-post-card" style={{ width: '18rem' }}>
      <Card.Body >
          <Card.Title >{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Button 
            size="sm"
            name="delete-btn" 
            variant="info"
            onClick={handleClick}
            >Delete
          </Button>
          <Button 
            size="sm"
            name="edit-btn" 
            variant="success"
            onClick={handleToggle}
            >Edit
          </Button>
        </Card.Body>
    </Card>
  )

  return isToggled ? <PostForm post={post}/> : postCard()
}

export default UserPost