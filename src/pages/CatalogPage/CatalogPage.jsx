import React, { useContext, useEffect } from 'react';
import PostList from '../../components/PostList/PostList';
import { PostContext } from '../../context/PostContext';
import PostSkeleton from '../../components/PostSkeleton/PostSkeleton';
import { skeletonFakeArray } from './data';
import PostListHead from '../../components/PostListHead/PostListHead';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import { URLS } from '../../utils/constants';
import { UserContext } from '../../context/UserContext';
import { Container } from '@mui/material';

const PostsPage = () => {
  const { posts, handlePostLike } = useContext(PostContext);
  const { currentUser } = useContext(UserContext);
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
      {posts.length === 0 ? (
        <Container>
          {skeletonArray}
        </Container>
      ) : (
        <PostList
          posts={posts}
          onPostLike={handlePostLike}
          currentUser={currentUser}
        />
      )}
    </>
  );
};

export default PostsPage;
