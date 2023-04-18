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
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import FavouritesPage from '../../pages/FavouritesPage/FavouritesPage';
import AboutPage from '../../pages/AboutPage/AboutPage';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


   useEffect(() => {
     setIsLoading(true);
     Promise.all([api.getUserInfo(), api.getPostList()])
       .then(([userData, postData]) => {
         console.log("postData", postData);
         setCurrentUser(userData);
         setPosts(postData);
         const favouritesProducts = postData?.filter((item) =>
           isLiked(item.likes, userData._id)
         );
         setFavourites(favouritesProducts);
         console.log("favouritesProducts", favouritesProducts);
       })
       .catch((err) => console.error(err))
       .finally(() => {
         setIsLoading(false);
       });
   }, []);

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

      const liked = isLiked(post.likes, currentUser._id);
      return api.changeLikePost(post._id, liked).then((newPost) => {
        const newPosts = posts.map((post) => {
          return post._id === newPost._id ? newPost : post;
        });

        if (!liked) {
          setFavourites((prevState) => [...prevState, newPost]);
        } else {
          setFavourites((prevState) =>
            prevState.filter((post) => post._id !== newPost._id)
          );
        }

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
      <UserContext.Provider value={{ currentUser, isLoading }}>
        <PostContext.Provider
          value={{
            posts,
            favourites,
            handlePostLike,
            handlePostsSearch
          }}
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
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
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
