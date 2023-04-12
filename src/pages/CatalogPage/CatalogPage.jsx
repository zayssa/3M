import React from "react";
import PostList from "../../components/PostList/PostList";

const PostsPage = ({ posts, handlePostLike, currentUser }) => {
  return (
    <>
      <PostList
        postsData={posts}
        onPostLike={handlePostLike}
        currentUser={currentUser}
      />
    </>
  );
};

export default PostsPage;
