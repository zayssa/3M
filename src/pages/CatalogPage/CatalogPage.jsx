import React, { useContext } from "react";
import PostList from "../../components/PostList/PostList";
import { PostContext } from "../../context/PostContext";

const PostsPage = ({ handlePostLike, currentUser }) => {
  const { posts } = useContext(PostContext);

  return (
    <>
      <PostList
        posts={posts}
        onPostLike={handlePostLike}
        currentUser={currentUser}
      />
    </>
  );
};

export default PostsPage;
