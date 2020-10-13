import React from 'react';
import UserPost from "../Components/UserPost"
import "../Styling/PostContainer.css"


function PostContainer ({posts}) {
  
 const renderPosts = () =>{
    return this.props.posts.map(post=> <UserPost key={post.id} {...post}/>)
  }
  
  
    return (
      <ul className="post-container">
          {renderPosts()}
      </ul>
    );
  
}

export default PostContainer