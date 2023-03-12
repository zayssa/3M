import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import Header from '../Header/Header.jsx';
import { postData } from './posts.js';
import PostList from '../PostList/PostList';
import Footer from '../Footer/Footer.jsx';
import Button from '../Button/Button.jsx'


const App = () => {
  return (
    <>
      <Box sx={{ display: { md: 'flex', flexDirection: 'column', minHeight: "100vh" } }}>
        <Header />
        <Container sx={{
          flexGrow: 1 }}>
          <Button />
          <PostList postsData={postData} />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default App;
