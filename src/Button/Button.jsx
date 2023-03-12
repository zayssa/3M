import React from 'react';
import { Button as ButtonMui, Box, Link, Typography } from '@mui/material';

const Button = () => {
    return (
        <Box sx={{ height: 150, marginTop: 5, position: 'relative' }}>
            <Link href='../public/index.html' underline="none" color="black">Главная</Link> / <Link underline="none" color="gray">Все посты</Link>
            <Typography sx={{
                fontFamily: 'Pangolin'
            }} textAlign='center' variant='h3'>Реактивные посты</Typography>
            <ButtonMui sx={{ position: 'absolute', bottom: 10, right: 10 }} variant="contained" color="inherit" onClick={() => {
                console.log("Есть контакт!");
            }}>Создать пост</ButtonMui>
        </Box>
    );
};

export default Button;