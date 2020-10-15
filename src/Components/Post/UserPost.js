import React from 'react';
import Card from 'react-bootstrap/Card';


function UserPost({title,content}) {
  return (
    <Card className="user-post-card" style={{ width: '18rem' }}>
      <Card.Body >
        <Card.Title >{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserPost