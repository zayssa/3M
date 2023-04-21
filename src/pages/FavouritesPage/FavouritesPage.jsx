import React, { useContext, useEffect } from 'react';
import { Container, Typography } from '@mui/material';

import { PostContext } from '../../context/PostContext';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import PostList from '../../components/PostList/PostList';
import { URLS } from '../../utils/constants';

const FavouritesPage = () => {
  const { favourites } = useContext(PostContext);
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    setBreadcrumbs([
      {
        label: 'Все посты',
        url: `/${URLS.posts}`,
      },
      {
        label: 'Избранное',
        url: `/${URLS.posts}/${URLS.favourites}`,
      },
    ]);
  }, [setBreadcrumbs]);

  return (
    <Container>
      <Typography variant='h3' fontFamily={'Pangolin'} sx={{marginBottom: '20px'}}>Избранное</Typography>
      <div>
        <PostList posts={favourites} />
      </div>
    </Container>
  );
};

export default FavouritesPage;