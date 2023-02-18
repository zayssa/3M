import React, { useCallback, useMemo, useState } from 'react';
import { Box, Grid, Pagination } from '@mui/material';

import Post from '../Post/Post';
import { POSTS_PER_PAGE } from '../shared/constants';

const PostList = ({ postsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = useMemo(() => {
    return Math.ceil(postsData.length / POSTS_PER_PAGE);
  }, [postsData]);
  const handlePageChange = useCallback((_, val) => setCurrentPage(val), []);

  const posts = useMemo(() => {
    const start = POSTS_PER_PAGE * (currentPage - 1);
    return postsData.slice(start, start + POSTS_PER_PAGE);
  }, [postsData, currentPage]);

  return (
    <Box py={5}>
      <Grid container spacing={5}>
        {posts.map((item) => (
          <Post key={item._id} {...item} />
        ))}
      </Grid>

      <Box pt={5} display="flex" justifyContent="center">
        <Pagination
          count={pagesCount}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default PostList;
