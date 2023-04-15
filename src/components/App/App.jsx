import React from 'react';
import s from './App.module.css';
import { useEffect, useState, useCallback } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import api from '../../utils/api';
import { isLiked } from '../../utils/post.js';
import { UserContext } from '../../context/UserContext';
import { PostContext } from '../../context/PostContext';
import { Route, Routes } from 'react-router';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import PostPage from '../../pages/PostPage/PostPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import FavouritesPage from "../../pages/FavouritesPage/FavouritesPage";
import Button from '../Button/Button';
import AboutPage from '../../pages/AboutPage/AboutPage';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
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
        // setIsLoading(false);
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
        })

        if (!liked) {
          setFavourites((prevState) => [...prevState, newPost]);
        } else {
          setFavourites((prevState) => prevState.filter((post) => post._id !== newPost._id));
        }

        setPosts(newPosts);
        return newPost;
      });
    },
    [posts, currentUser]
  );

  return (
    <>
      <UserContext.Provider value={{ currentUser }}>
        <PostContext.Provider
          value={{ posts, favourites, handlePostLike, handlePostsSearch }}
        >
          <Header />

          <main className="container">
            <Routes>
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
              <Route path="/" element={<Button />} />
              <Route path="/post/:postId" element={<PostPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>

          <Footer />
        </PostContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;
