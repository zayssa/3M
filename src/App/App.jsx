import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import Header from '../Header/Header.jsx';
import { postData } from './posts.js';
import PostList from '../PostList/PostList';
import Footer from '../Footer/Footer.jsx';
import Button from '../Button/Button.jsx';
import { useEffect, useState } from 'react';
import api from '../utils/api';


const App = () => {
  const [cards, setCards] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    // api.getUserInfo().then((userData) => {
    //   console.log('userData', userData)
    //   setCurrentUser(userData);
    // })
    api.getPostList().then((cardData) => {
      setCards(cardData);
    })
  }, []); 

  return (
    <>
      <Box sx={{ display: { md: 'flex', flexDirection: 'column', minHeight: "100vh" } }}>
        <Header />
        <Container sx={{
          flexGrow: 1 }}>
          <Button />
          <PostList postsData={cards} />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default App;
