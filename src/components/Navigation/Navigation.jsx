import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Link as MuiLink, MenuItem, MenuList } from '@mui/material';

const Navigation = () => {
  const params = useParams();

  return (
    <Box width="300px" role="presentation">
      <MenuList>
        <MenuItem selected={!params}>
          <MuiLink component={Link} to="/">
            Главная
          </MuiLink>
        </MenuItem>

        <MenuItem>
          <MuiLink component={Link} to="/about">
            О нас
          </MuiLink>
        </MenuItem>

        <MenuItem>
          <MuiLink component={Link} to="#">
            Темы
          </MuiLink>
        </MenuItem>

        <MenuItem>
          <MuiLink component={Link} to="#">
            Аккаунт
          </MuiLink>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default Navigation;
