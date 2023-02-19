import React from 'react';
import { Container } from '@mui/material';

import Header from '../Header/Header.jsx';
import { postData } from './posts.js';
import PostList from '../PostList/PostList';
import Footer from '../Footer/Footer.jsx'


const App = () => {
  return (
    <>
      <Header />
      <Container>
        <PostList postsData={postData} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
