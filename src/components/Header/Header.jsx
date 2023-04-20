import React, { useCallback, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Link as LinkMui,
  Drawer,
  Container,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import User from "../User/User";
import Search from "../Search/Search";
import Navigation from "../Navigation/Navigation";
import logo from "./img/blue-PhotoRoom.png-PhotoRoom.png";
import s from "./Header.module.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onDrawerOpen = useCallback(() => setIsDrawerOpen(true), []);
  const onDrawerClose = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <AppBar
      sx={{
        position: "sticky",
        bgcolor: "lightblue",
        color: "black",
      }}
    >
      <Container>
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

            <LinkMui href="/" className={s.logo}>
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
