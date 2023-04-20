import React, { useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import PostList from '../../components/PostList/PostList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import { Container } from '@mui/material';

const FavouritesPage = () => {
  const { favourites } = useContext(PostContext);

  return (
    <>
      <Container>
        <ContentHeader title="Избранное" />
        <div>
          <PostList posts={favourites} />
        </div>
      </Container>
    </>
  );
};

export default FavouritesPage;
