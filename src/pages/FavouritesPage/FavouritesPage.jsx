import React, { useContext, useEffect } from 'react';

import { PostContext } from '../../context/PostContext';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import PostList from '../../components/PostList/PostList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import { URLS } from '../../utils/constants';

const FavouritesPage = () => {
  const { favourites } = useContext(PostContext);
  const { breadcrumbs, addBreadcrumbsPoint } = useContext(BreadcrumbsContext);

  useEffect(() => {
    addBreadcrumbsPoint({
      label: 'Избранное',
      url: `/${URLS.posts}/${URLS.favourites}`,
    });
  }, [addBreadcrumbsPoint, breadcrumbs]);

  return (
    <>
      <ContentHeader title="Избранное" />

      <PostList posts={favourites} />
    </>
  );
};

export default FavouritesPage;
