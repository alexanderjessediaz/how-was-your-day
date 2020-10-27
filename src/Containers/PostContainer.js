import React from 'react';
import UserPost from '../Components/Post/UserPost';
import '../Styling/PostContainer.css';





const PostContainer = ({posts, deletePost, updatePost}) => {
  const renderPosts = () =>{
    return posts.map(post=> <UserPost key={post.id} {...post} updatePost={updatePost} deletePost={deletePost}/>)
   }
    return (
      <ul className="post-container">
          {renderPosts()}
      </ul>
    );
}

export default PostContainer