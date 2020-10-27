import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';


function UserPost({id, title,content, deletePost}) {

  const [isToggled, setIsToggled] = useState(false)

  const handleClick = (e) => deletePost(id)

  const handleToggle = (e) => setIsToggled(!isToggled)
  return (
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
  );
}

export default UserPost