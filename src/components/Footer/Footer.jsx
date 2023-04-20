import React from 'react';
import {
  Toolbar,
  Typography,
  Box,
  Link,
  Container,
  AppBar,
} from '@mui/material';
import { Facebook, Instagram, Telegram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar
      component="footer"
      position="static"
      sx={{
        bgcolor: 'lightblue',
        color: 'black',
        flexShrink: 0,
      }}
    >
      <Toolbar>
        <Container
          sx={{ display: { md: 'flex', justifyContent: 'space-between' } }}
        >
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              REACTивный проект
            </Typography>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                  justifyContent: 'space-evenly',
                },
              }}
            >
              <Link href="https://ru-ru.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/" color="inherit">
                <Instagram />
              </Link>
              <Link href="https://web.telegram.org/k/" color="inherit">
                <Telegram />
              </Link>
              <Link href="https://twitter.com/?lang=ru" color="inherit">
                <Twitter />
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { md: 'flex', alignItems: 'center' } }}>
            <Typography>© 2023. Команда "3М"</Typography>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
