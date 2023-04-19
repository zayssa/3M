import React, { useCallback } from 'react';
import { useParams } from 'react-router';
import PostContent from '../../components/PostContent/PostContent';
import api from '../../utils/api';
import { useEffect, useState } from 'react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Spinner from '../../components/Spinner/Spinner';

const PostPage = () => {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [post, setPost] = useState([]);

  const reloadPostData = useCallback(() => {
    setIsLoading(true);
    api
      .getPostById(postId)
      .then((postData) => {
        setPost(postData);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [postId]);

  useEffect(() => {
    reloadPostData();
  }, [reloadPostData]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        !isError && (
          <PostContent post={post} onPostDataChange={reloadPostData} />
        )
      )}
      {isError && <NotFoundPage />}
    </>
  );

};

export default PostPage;
