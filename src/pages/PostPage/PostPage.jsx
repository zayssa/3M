import React from "react";
import { useParams } from "react-router";
import PostContent from "../../components/PostContent/PostContent";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import NotFoundPage from '../NotFoundPage/NotFoundPage'


const PostPage = ({ currentUser }) => {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    api
      .getPostById(postId)
      .then((postData) => {
        setPost(postData);
      })
      .catch((err) => {
        console.error(err)
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>{isError ? <NotFoundPage /> : <PostContent post={post} {...post} />}</>
  );
};

export default PostPage;
