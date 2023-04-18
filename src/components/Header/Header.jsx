import React, { useCallback, useContext } from 'react';
import s from './Header.module.css';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Link as LinkMui,
  Drawer,
  Container,
  Grid,
  Input,
  Avatar,
} from '@mui/material';
import {
  Favorite,
  Search as SearchIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import User from '../User/User';
import { PostContext } from '../../context/PostContext';
import { UserContext } from '../../context/UserContext';
import { Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  const { handlePostsSearch } = useContext(PostContext);
  const { currentUser } = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { favourites } = useContext(PostContext);

  const handleSearchChange = useCallback((evt) => {
    setSearchValue(evt.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    handlePostsSearch(searchValue);
  }, [searchValue, handlePostsSearch]);

  const handleSearchKeyDown = useCallback(
    (evt) => {
      if (evt.keyCode === 13) {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <header>
      <AppBar
        position="sticky"
        sx={{
          height: 100,
          bgcolor: "lightblue",
          color: "black",
          paddingTop: 1,
        }}
      >
        <Toolbar>
          <Container>
            <Grid
              container
              sx={{
                display: {
                  md: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
              }}
            >
              <Grid
                item
                lg={4}
                md={4}
                sx={{ display: { md: "flex", alignItems: "center" } }}
              >
                <Drawer
                  anchor="left"
                  open={isDrawerOpen}
                  onClose={() => setIsDrawerOpen(false)}
                >
                  <Box
                    p={2}
                    width="300px"
                    textAlign="center"
                    role="presentation"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Link
                      href="../public/index.html"
                      variant="h6"
                      underline="none"
                      color="text.primary"
                    >
                      Главная
                    </Link>
                    <Link
                      href="#"
                      variant="h6"
                      underline="none"
                      color="text.secondary"
                      to={{ pathname: "/about" }}
                    >
                      О нас
                    </Link>
                    <Link
                      href="#"
                      variant="h6"
                      underline="none"
                      color="text.secondary"
                    >
                      Темы
                    </Link>
                    <Link
                      href="#"
                      variant="h6"
                      underline="none"
                      color="text.secondary"
                    >
                      Аккаунт
                    </Link>
                  </Box>
                </Drawer>

                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 3 }}
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      fontFamily: "Pangolin",
                    },
                  }}
                  textAlign="center"
                >
                  <LinkMui
                    href="../public/index.html"
                    sx={{ display: { sm: "block" }, fontFamily: "Pangolin" }}
                    variant="h3"
                    underline="none"
                    color="text.primary"
                  >
                    REACT
                  </LinkMui>
                  <LinkMui
                    href="../public/index.html"
                    underline="none"
                    color="gray"
                  >
                    реактивные посты
                  </LinkMui>
                </Typography>
              </Grid>

              <Grid
                item
                lg={4}
                md={4}
                sx={{ display: { md: "flex", alignItems: "center" } }}
              >
                <Routes>
                  <Route
                    path="/posts"
                    element={
                      <Input
                        endAdornment={
                          <IconButton onClick={handleSearch}>
                            <SearchIcon />
                          </IconButton>
                        }
                        placeholder="Search…"
                        aria-label="search"
                        onKeyDown={handleSearchKeyDown}
                        value={searchValue}
                        onChange={handleSearchChange}
                      ></Input>
                    }
                  />
                </Routes>
              </Grid>
              <Box sx={{ flexGrow: 1 }} />

              <Grid
                item
                lg={4}
                md={4}
                sx={{
                  display: { xs: "none", md: "flex", alignItems: "center" },
                }}
              >
                <Link
                  className={s.favouritesLink}
                  to={{ pathname: "/favourites" }}
                >
                  <Favorite />
                  {favourites?.length !== 0 && (
                    <span className={s.iconBubble}>{favourites?.length}</span>
                  )}
                  <IconButton
                    size="large"
                    aria-label="favorite"
                    color="inherit"
                  ></IconButton>
                </Link>

                <Link to={{ pathname: "/user" }}>
                  <Avatar
                    aria-label="recipe"
                    src={currentUser.avatar}
                    sx={{ marginLeft: 2 }}
                  ></Avatar>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
