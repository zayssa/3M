import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Link as LinkMui,
  Drawer,
  Container,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import User from '../User/User';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';
import logo from './img/blue-PhotoRoom.png-PhotoRoom.png';
import s from './Header.module.css';
import { URLS } from '../../utils/constants';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onDrawerOpen = useCallback(() => setIsDrawerOpen(true), []);
  const onDrawerClose = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <AppBar
      sx={{
        position: 'sticky',
        bgcolor: 'lightblue',
        color: 'black',
      }}
    >
      <Container>
        <Box py={1}>
          <Toolbar>
            <Drawer anchor="left" open={isDrawerOpen} onClose={onDrawerClose}>
              <Navigation onClose={onDrawerClose} />
            </Drawer>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Навигация"
              onClick={onDrawerOpen}
            >
              <MenuIcon />
            </IconButton>

            <LinkMui component={Link} to={`/${URLS.main}`} className={s.logo}>
              <img src={logo} alt="Логотип" />
            </LinkMui>

            <Box className={s.search} mx="auto">
              <Search />
            </Box>

            <User />
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
