import React, { useCallback, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Link as LinkMui,
  Drawer,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import User from '../User/User';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';

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
      <Box py={1}>
        <Toolbar>
          <Drawer anchor="left" open={isDrawerOpen} onClose={onDrawerClose}>
            <Navigation />
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

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
                fontFamily: 'Pangolin',
              },
            }}
            textAlign="center"
          >
            <LinkMui
              href="/"
              sx={{
                display: { sm: 'block' },
                fontFamily: 'Pangolin',
              }}
              underline="none"
              color="grey"
            >
              <Typography
                color="text.primary"
                fontFamily="Pangolin"
                variant="h3"
                lineHeight={1}
              >
                REACT
              </Typography>
              реактивные посты
            </LinkMui>
          </Typography>

          <Box mx="auto">
            <Search />
          </Box>

          <User />
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
