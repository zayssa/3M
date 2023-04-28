import React, { useContext, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';

import PostList from '../../components/PostList/PostList';
import { PostContext } from '../../context/PostContext';
import PostSkeleton from '../../components/PostSkeleton/PostSkeleton';
import { skeletonFakeArray } from './data';
import PostListHead from '../../components/PostListHead/PostListHead';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import { URLS } from '../../utils/constants';
import { UserContext } from '../../context/UserContext';

import noRegistration from './img/noRegistration.jpeg';

const PostsPage = () => {
  const { posts, handlePostLike } = useContext(PostContext);
  const { currentUser, isLoading } = useContext(UserContext);
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  const skeletonArray = skeletonFakeArray.map((el) => (
    <PostSkeleton key={el} />
  ));

  useEffect(() => {
    setBreadcrumbs([
      {
        label: 'Все посты',
        url: `/${URLS.posts}`,
      },
    ]);
  }, [setBreadcrumbs]);

  return (
    <>
      <PostListHead />
      {isLoading ? (
        <Container>{skeletonArray}</Container>
      ) : currentUser ? (
        <PostList
          posts={posts}
          onPostLike={handlePostLike}
          currentUser={currentUser}
        />
      ) : (
        <Container>
          <Box pt={5}>
            <Typography variant="h5" align="center">
              Пожалуйста, авторизуйтесь!
            </Typography>
            <Box my={4}>
              <img
                src={noRegistration}
                alt="Пожалуйста, авторизуйтесь!"
                width="100%"
              />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default PostsPage;
