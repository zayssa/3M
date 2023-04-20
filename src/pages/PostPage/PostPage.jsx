import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import PostContent from '../../components/PostContent/PostContent';
import api from '../../utils/api';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Spinner from '../../components/Spinner/Spinner';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import { URLS } from '../../utils/constants';

const PostPage = () => {
  const { addBreadcrumbsPoint } = useContext(BreadcrumbsContext);
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    addBreadcrumbsPoint({
      label: post.title || '...',
      url: `/${URLS.posts}/${postId}`,
    });
  }, [addBreadcrumbsPoint, postId, post]);

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
