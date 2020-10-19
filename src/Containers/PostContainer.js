import React from 'react';
import UserPost from '../Components/Post/UserPost';
import '../Styling/PostContainer.css';





const PostContainer = ({posts}) => {
  const renderPosts = () =>{
    return posts.map(post=> <UserPost key={post.id} {...post}/>)
   }
    return (
      <ul className="post-container">
          {renderPosts()}
      </ul>
    );
}

export default PostContainer