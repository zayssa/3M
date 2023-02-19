import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Badge, Link  } from '@mui/material';
import { Facebook, Instagram, Telegram, Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: 'text.primary' }}>
            <Toolbar>
                <Box>
                    <Typography variant="h5" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Реактивные посты
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly'} }}>
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
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <Typography>
                        © 2023. Команда "3М"
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;