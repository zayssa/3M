import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Outlet, Route, Routes } from 'react-router';
import { Alert, Snackbar } from '@mui/material';
import { Box } from '@mui/material';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import api from '../../utils/api';
import { isLiked } from '../../utils/post.js';
import { UserContext } from '../../context/UserContext';
import { PostContext } from '../../context/PostContext';
import { SnackbarContext } from '../../context/SnackbarContext';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import PostPage from '../../pages/PostPage/PostPage';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import FavouritesPage from '../../pages/FavouritesPage/FavouritesPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import UserPage from '../../pages/UserPage/UserPage.jsx';
import MainPage from '../../pages/MainPage/MainPage.jsx';
import { URLS } from '../../utils/constants.js';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const getPostsList = useCallback(() => {
    api.getPostList().then((postData) => {
      setPosts(postData);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getUserInfo(), api.getPostList()])
      .then(([userData, postData]) => {
        setCurrentUser(userData);
        setPosts(postData);
        const favouritesProducts = postData?.filter((item) =>
          isLiked(item.likes, userData._id)
        );
        setFavourites(favouritesProducts);
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

  const handleSnackbarClose = useCallback(() => {
    setMessage((prev) => ({
      ...prev,
      hide: true,
    }));
    if (message.onClose) {
      message.onClose();
    }
    setTimeout(() => {
      setMessage(null);
    }, 500);
  }, [message]);

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      <UserContext.Provider value={{ currentUser, isLoading }}>
        <PostContext.Provider
          value={{
            posts,
            getPostsList,
            favourites,
            handlePostLike,
            handlePostsSearch,
          }}
        >
          <SnackbarContext.Provider value={{ message, setMessage }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Header />

              <main className="content">
                <Routes>
                  <Route
                    element={
                      <>
                        <Breadcrumbs />
                        <Outlet />
                      </>
                    }
                  >
                    <Route index element={<MainPage />} />
                    <Route
                      path={`/${URLS.posts}`}
                      element={<CatalogPage />}
                      exact
                    />
                    <Route
                      path={`/${URLS.posts}/${URLS.favourites}`}
                      element={<FavouritesPage />}
                      exact
                    />
                    <Route
                      path={`/${URLS.posts}/:postId`}
                      element={<PostPage />}
                    />
                    <Route path={`/${URLS.about}`} element={<AboutPage />} />
                    <Route path={`/${URLS.user}`} element={<UserPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Route>
                </Routes>
              </main>
              <Footer />

              <Snackbar
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={Boolean(message) && !message.hide}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
              >
                <Alert severity={message?.severity || 'error'}>
                  {message?.text || 'Произошла ошибка'}
                </Alert>
              </Snackbar>
            </Box>
          </SnackbarContext.Provider>
        </PostContext.Provider>
      </UserContext.Provider>
    </BreadcrumbsContext.Provider>
  );
};

export default App;
