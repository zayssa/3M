import React, { useContext, useEffect } from 'react';
import PostList from '../../components/PostList/PostList';
import { PostContext } from '../../context/PostContext';
import PostSkeleton from '../../components/PostSkeleton/PostSkeleton';
import { skeletonFakeArray } from './data';
import PostListHead from '../../components/PostListHead/PostListHead';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import { URLS } from '../../utils/constants';

const PostsPage = ({ handlePostLike, currentUser }) => {
  const { posts } = useContext(PostContext);
  const { breadcrumbs, addBreadcrumbsPoint } = useContext(BreadcrumbsContext);
  const skeletonArray = skeletonFakeArray.map((el) => (
    <PostSkeleton key={el} />
  ));

  useEffect(() => {
    addBreadcrumbsPoint({
      label: 'Все посты',
      url: `/${URLS.posts}`,
    });
  }, [addBreadcrumbsPoint, breadcrumbs]);

  return (
    <>
      <PostListHead />
      {posts.length === 0 ? (
        <>{skeletonArray}</>
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
