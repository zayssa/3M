import React, { useContext, useEffect } from 'react';
import { Container } from '@mui/material';

import { PostContext } from '../../context/PostContext';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import PostList from '../../components/PostList/PostList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
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
      <ContentHeader title="Избранное" />
      <div>
        <PostList posts={favourites} />
      </div>
    </Container>
  );
};

export default FavouritesPage;
