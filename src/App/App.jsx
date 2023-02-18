import React from 'react';
import { Container } from '@mui/material';

import { postData } from './posts.js';
import PostList from '../PostList/PostList';

const App = () => {
  return (
    <>
      <Container>
        <PostList postsData={postData} />
      </Container>
    </>
  );
};

export default App;
