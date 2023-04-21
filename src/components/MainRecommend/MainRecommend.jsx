/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
import React, { useContext } from "react";
import s from "./MainRecommend.module.css";
import { Box, Container, Typography } from "@mui/material";
import {PostContext} from '../../context/PostContext'
import PostList from "../PostList/PostList";
import { UserContext } from "../../context/UserContext";
import PostListHead from "../PostListHead/PostListHead";
import { skeletonFakeArray } from "../../pages/CatalogPage/data";
import Post from "../Post/Post";

const MainRecommend = () => {
const { posts, handlePostLike } = useContext(PostContext);
const { currentUser } = useContext(UserContext);

  return (
    <>
      <section className={s.recomend}>
        {posts.length === 0 ? (
          <>{skeletonFakeArray}</>
        ) : (
          <Container>
            <Typography variant="h3">Новинки</Typography>
            <Box className={s.wrapper}>
              <PostList
                posts={posts}
                onPostLike={handlePostLike}
                currentUser={currentUser}
              />
            </Box>
          </Container>
        )}
      </section>
    </>
  );
};

export default MainRecommend;
