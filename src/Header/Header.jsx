import React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { AppBar, Toolbar, IconButton, Typography, Box, Badge, Link, Drawer, MenuItem, Menu, Container } from '@mui/material';
import { Notifications, Favorite } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  })); 

  

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => setAnchorEl(null);
    const openMenu = (event) => setAnchorEl(event.currentTarget);
   
    return (
        <AppBar position="sticky" sx={{ bgcolor: 'error.main' }}>
            <Toolbar>
                <Container sx={{ display: { md: 'flex', justifyContent: 'space-between', alignItems: 'center' } }}>
                    <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                        <Box p={2} width="300px" textAlign="center" role='presentation' sx={{ display: 'flex', flexDirection: 'column' }} >
                            <Link href='../public/index.html' variant='h6' underline="none" color="text.primary">Главная</Link>
                            <Link href='#' variant='h6' underline="none" color="text.secondary">Авторы</Link>
                            <Link href='#' variant='h6' underline="none" color="text.secondary">Темы</Link>
                            <Link href='#' variant='h6' underline="none" color="text.secondary">Аккаунт</Link>
                        </Box>
                    </Drawer>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }} onClick={() => setIsDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Link href="../public/index.html" underline="none" color="inherit">
                            Реактивные посты
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="favorite" color="inherit">
                            <Favorite />
                        </IconButton>

                        <IconButton size="large" aria-label="show 3 new notifications" color="inherit" onClick={openMenu}>
                            <Badge badgeContent={3} color="warning">
                                <Notifications />
                            </Badge>
                        </IconButton>

                        <Menu id="basic-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} getContentAnchorEl={null} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                            <MenuItem onClick={handleClose}>Оповещение №1</MenuItem>
                            <MenuItem onClick={handleClose}>Оповещение №2</MenuItem>
                            <MenuItem onClick={handleClose}>Оповещение №3</MenuItem>
                        </Menu>

                    </Box>
                </Container>
                
                
            </Toolbar>
        </AppBar>
    );
  };

  export default Header;