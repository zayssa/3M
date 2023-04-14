import React, { useContext, useMemo } from 'react';
import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { PostContext } from '../../context/PostContext';

const Breadcrumbs = () => {
  const { posts } = useContext(PostContext);
  const { postId } = useParams();

  const currentPostName = useMemo(() => {
    const found = posts.find((item) => item._id === postId);
    return found?.title || 'Неопознанный пост';
  }, [posts, postId]);

  return (
    <Box py={2}>
      <MuiBreadcrumbs>
        <MuiLink component={Link} to="/">
          Главная
        </MuiLink>

        {postId ? (
          <MuiLink component={Link} to="/posts">
            Все посты
          </MuiLink>
        ) : (
          <span>Все посты</span>
        )}

        {postId && <span>{currentPostName}</span>}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
