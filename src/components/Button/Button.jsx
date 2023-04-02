import React from 'react';
import { Button as ButtonMui, Box, Link, Typography, Modal } from '@mui/material';
import CreatePostForm from '../Forms/CreatePostForm/CreatePostForm';
import s from './Button.module.css';

const Button = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

    return (
      <Box
        sx={{
          height: 150,
          marginTop: 5,
          position: "relative",
          marginBottom: 10,
        }}
      >
        <Link href="../public/index.html" underline="none" color="black">
          Главная
        </Link>
        <Link underline="none" color="gray">
          Все посты
        </Link>
        <Typography
          sx={{
            fontFamily: "Pangolin",
          }}
          textAlign="center"
          variant="h3"
        >
          Реактивные посты
        </Typography>
        <ButtonMui
          sx={{ position: "absolute", bottom: 10, right: 10 }}
          variant="contained"
          color="inherit"
          onClick={handleOpen}
        >
          Создать пост
        </ButtonMui>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box  sx={style}>
            <CreatePostForm />
          </Box>
        </Modal>
      </Box>
    );
};

export default Button;