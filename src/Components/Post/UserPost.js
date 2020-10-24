import React from 'react';
import {Card, Button} from 'react-bootstrap';


function UserPost({id, title,content, deletePost}) {

  const handleClick = (e) => deletePost(id)
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
      </Card.Body>

    </Card>
  );
}

export default UserPost