import React, { useContext } from 'react';
import PostList from '../../components/PostList/PostList';
import { PostContext } from '../../context/PostContext';
import PostSkeleton from '../../components/PostSkeleton/PostSkeleton';
import { skeletonFakeArray } from "./data";
import PostListHead from '../../components/PostListHead/PostListHead';


const PostsPage = ({ handlePostLike, currentUser }) => {
  const { posts } = useContext(PostContext);
  const skeletonArray = skeletonFakeArray.map((el) => (
    <PostSkeleton key={el} />
  ));


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
