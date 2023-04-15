import React, { useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import PostList from '../../components/PostList/PostList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';

const FavouritesPage = () => {
  const { favourites } = useContext(PostContext);

  return (
    <>
      <ContentHeader title="Избранное" />
      <div>
        <PostList posts={favourites} />
      </div>
    </>
  );
};

export default FavouritesPage;
