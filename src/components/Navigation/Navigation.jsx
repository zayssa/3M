import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Link as MuiLink, MenuItem, MenuList } from '@mui/material';
import s from './Navigation.module.css';


const Navigation = () => {

  return (
    <Box width="300px" role="presentation">
      <MenuList>
        <MenuItem className={s.li}>
          <MuiLink
            className={s.link}
            component={Link}
            to="/"
            textAlign="center"
          >
            Главная
          </MuiLink>
        </MenuItem>

        <MenuItem className={s.li}>
          <MuiLink
            className={s.link}
            component={Link}
            to="/about"
          >
            О нас
          </MuiLink>
        </MenuItem>

        <MenuItem className={s.li}>
          <MuiLink className={s.link} component={Link} to="#">
            Профиль
          </MuiLink>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default Navigation;
