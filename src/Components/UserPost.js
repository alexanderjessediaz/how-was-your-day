import React from 'react';

import "../Styling/UserPost.css"

function UserPost({title,content}) {
  return (
    <li className="user-post">
        <h2>{title}</h2>
        <p>{content}</p>
    </li>
  );
}

export default UserPost