import React, { Fragment } from 'react';
import PostForm from '../Components/PostForm';
import Hero from '../Containers/Hero';

const Home =()=> {
    return (
      <Fragment>
        <Hero />
        <PostForm/>
      </Fragment>
    )
};

export default Home;