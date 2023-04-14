import React, { useCallback, useContext } from 'react';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Badge,
  Link,
  Drawer,
  MenuItem,
  Menu as MenuMui,
  Container,
  Grid,
  Input,
} from '@mui/material';
import {
  Notifications,
  Favorite,
  Search as SearchIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import User from '../User/User';
import { PostContext } from '../../context/PostContext';
import { UserContext } from '../../context/UserContext';
import { Routes, Route } from 'react-router';

const Header = () => {
  const { handlePostsSearch } = useContext(PostContext);
  const { currentUser } = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const handleClose = () => setAnchorEl(null);
  const openMenu = (event) => setAnchorEl(event.currentTarget);

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
    <AppBar
      position="sticky"
      sx={{ height: 100, bgcolor: 'lightblue', color: 'black', paddingTop: 1 }}
    >
      <Toolbar>
        <Container>
          <Grid
            container
            sx={{
              display: {
                md: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            }}
          >
            <Grid
              item
              lg={4}
              md={4}
              sx={{ display: { md: 'flex', alignItems: 'center' } }}
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
                  sx={{ display: 'flex', flexDirection: 'column' }}
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
                  >
                    Авторы
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
                  display: { xs: 'none', sm: 'block', fontFamily: 'Pangolin' },
                }}
                textAlign="center"
              >
                <Link
                  href="../public/index.html"
                  sx={{ display: { sm: 'block' }, fontFamily: 'Pangolin' }}
                  variant="h3"
                  underline="none"
                  color="text.primary"
                >
                  REACT
                </Link>
                <Link href="../public/index.html" underline="none" color="gray">
                  реактивные посты
                </Link>
              </Typography>
            </Grid>

            <Grid
              item
              lg={4}
              md={4}
              sx={{ display: { md: 'flex', alignItems: 'center' } }}
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
              sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}
            >
              <IconButton size="large" aria-label="favorite" color="inherit">
                <Favorite />
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 3 new notifications"
                color="inherit"
                onClick={openMenu}
              >
                <Badge badgeContent={3} color="warning">
                  <Notifications />
                </Badge>
              </IconButton>

              <MenuMui
                id="basic-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={handleClose}>Оповещение №1</MenuItem>
                <MenuItem onClick={handleClose}>Оповещение №2</MenuItem>
                <MenuItem onClick={handleClose}>Оповещение №3</MenuItem>
              </MenuMui>

              <User currentUser={currentUser} {...currentUser} />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
