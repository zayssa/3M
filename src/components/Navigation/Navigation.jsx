import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Link as MuiLink, MenuItem, MenuList } from '@mui/material';
import s from './Navigation.module.css';
import { URLS } from '../../utils/constants';

const Navigation = ({ onClose }) => {
  return (
    <Box width="300px" role="presentation">
      <MenuList>
        <MenuItem className={s.li}>
          <MuiLink
            className={s.link}
            component={Link}
            to={`/${URLS.main}`}
            textAlign="center"
            onClick={onClose}
          >
            Главная
          </MuiLink>
        </MenuItem>

        <MenuItem className={s.li}>
          <MuiLink
            className={s.link}
            component={Link}
            to={`/${URLS.about}`}
            onClick={onClose}
          >
            О нас
          </MuiLink>
        </MenuItem>

        <MenuItem className={s.li}>
          <MuiLink
            className={s.link}
            component={Link}
            to={`/${URLS.user}`}
            onClick={onClose}
          >
            Профиль
          </MuiLink>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default Navigation;
