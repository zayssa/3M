import React, { useCallback, useMemo, useState } from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import Button from '../Button/Button';
import Post from '../Post/Post';
import { POSTS_PER_PAGE } from '../shared/constants';
import NotFound from '../NotFound/NotFound';
import { useNavigate } from 'react-router';

const PostList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = useMemo(() => {
    return Math.ceil(posts?.length / POSTS_PER_PAGE);
  }, [posts]);
  const handlePageChange = useCallback((_, val) => setCurrentPage(val), []);

  const postsCurrent = useMemo(() => {
    const start = POSTS_PER_PAGE * (currentPage - 1);
    return posts?.slice(start, start + POSTS_PER_PAGE);
  }, [posts, currentPage]);

  const navigate = useNavigate();

  return (
    <Box pb={5}>
      {!posts.length ? (
        <NotFound
          title="Простите, по вашему запросу постов не найдено."
          buttonText="Назад"
          buttonAction={() => navigate(0)}
        />
      ) : (
        <>
          <Button />

          <Grid container spacing={5}>
            {postsCurrent?.map((item) => (
              <Post key={item._id} post={item} />
            ))}
          </Grid>

          <Box pt={5} display="flex" justifyContent="center">
            <Pagination
              count={pagesCount}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default PostList;
