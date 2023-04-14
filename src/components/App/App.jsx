import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import api from '../../utils/api';
import { isLiked } from '../../utils/post.js';
import { UserContext } from '../../context/UserContext';
import { PostContext } from '../../context/PostContext';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import PostPage from '../../pages/PostPage/PostPage';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const getPostsList = useCallback(() => {
    api.getPostList().then((postData) => {
      setPosts(postData);
    });
  }, []);

  useEffect(() => {
    getPostsList();

    api.getUserInfo().then((userData) => {
      setCurrentUser(userData);
    });
  }, [getPostsList]);

  const handlePostsSearch = useCallback((searchValue) => {
    api.search(searchValue).then((postData) => {
      setPosts(postData);
    });
  }, []);

  const handlePostLike = useCallback(
    async (post) => {
      if (!currentUser) {
        return;
      }

      const liked = isLiked(post.likes, currentUser._id); //ищем в массиве лайков id текущего пользователя.
      return api.changeLikePost(post._id, liked).then((newPost) => {
        // в зависимости от того есть ли лайки или нет отправляем запрос "DELETE" или "PUT"
        const newPosts = posts.map((post) => {
          return post._id === newPost._id ? newPost : post;
        });

        setPosts(newPosts);
        return newPost;
      });
    },
    [posts, currentUser]
  );

  return (
    <Box
      sx={{
        display: {
          md: 'flex',
        },
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <UserContext.Provider value={{ currentUser }}>
        <PostContext.Provider
          value={{ posts, getPostsList, handlePostLike, handlePostsSearch }}
        >
          <Header />

          <Container
            sx={{
              flexGrow: 1,
            }}
          >
            <Routes>
              <Route
                element={
                  <>
                    <Breadcrumbs />
                    <Outlet />
                  </>
                }
              >
                <Route index element={<Navigate to="/posts" replace />} />
                <Route path="/posts/">
                  <Route
                    index
                    element={
                      <CatalogPage
                        posts={posts}
                        handlePostLike={handlePostLike}
                        currentUser={currentUser}
                      />
                    }
                  />
                  <Route path=":postId" element={<PostPage />} />
                </Route>
              </Route>
            </Routes>
          </Container>

          <Footer />
        </PostContext.Provider>
      </UserContext.Provider>
    </Box>
  );
};

export default App;
