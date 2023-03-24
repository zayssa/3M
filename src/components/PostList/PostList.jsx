import React, { useCallback, useMemo, useState } from 'react';
import { Box, Grid, Pagination } from '@mui/material';

import Post from '../Post/Post';
import { POSTS_PER_PAGE } from '../shared/constants';
import { useContext } from 'react';
import { PostContext } from '../../context/PostContext';

const PostList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts } = useContext(PostContext);
  const pagesCount = useMemo(() => {
    return Math.ceil(posts?.length / POSTS_PER_PAGE);
  }, [posts]);
  const handlePageChange = useCallback((_, val) => setCurrentPage(val), []);

  const postsCurrent = useMemo(() => {
    const start = POSTS_PER_PAGE * (currentPage - 1);
    return posts?.slice(start, start + POSTS_PER_PAGE);
  }, [posts, currentPage]);

  return (
    <Box py={5}>
      <Grid container spacing={5}>
        {postsCurrent?.map((item) => (
          <Post key={item._id} post={item} />
        ))}
      </Grid>

      {posts?.length && (
        <Box pt={5} display="flex" justifyContent="center">
          <Pagination
            count={pagesCount}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default PostList;
