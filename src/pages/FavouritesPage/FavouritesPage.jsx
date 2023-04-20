import React, { useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import PostList from '../../components/PostList/PostList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import { Link, Navigate } from 'react-router-dom';
import s from './FavouritesPage.module.css';

const FavouritesPage = () => {
  const { favourites } = useContext(PostContext);

  return (
    <>
      {/* <Link className={s.buttonBack} href="/posts" onClick={() => Navigate(-1)}>
        Назад
      </Link> */}
      <ContentHeader title="Избранное" />
      <div>
        <PostList posts={favourites} />
      </div>
    </>
  );
};

export default FavouritesPage;
