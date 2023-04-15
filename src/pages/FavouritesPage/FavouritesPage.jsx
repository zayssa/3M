import React, { useContext } from "react";
import s from "./FavouritesPage.module.css";
import { PostContext } from "../../context/PostContext";
import { Sort } from "@mui/icons-material";
import PostList from "../../components/PostList/PostList";
import ContentHeader from "../../components/ContentHeader/ContentHeader";

const FavouritesPage = () => {

    const { favourites } = useContext(PostContext);

  
  return (
    <>
    <ContentHeader title='Избранное' />
      <Sort />
      <div>
        <PostList posts={favourites} />
      </div>
    </>
  );
};

export default FavouritesPage;
