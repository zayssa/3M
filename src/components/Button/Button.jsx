import React from 'react';
import {
  Button as ButtonMui,
  Box,
  Link,
  Typography,
  Modal,
} from '@mui/material';
import CreatePostForm from '../Forms/CreatePostForm/CreatePostForm';

const Button = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: 150,
        marginTop: 5,
        position: 'relative',
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
          fontFamily: 'Pangolin',
        }}
        textAlign="center"
        variant="h3"
      >
        Реактивные посты
      </Typography>
      <ButtonMui
        sx={{ position: 'absolute', bottom: 10, right: 10 }}
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
        <div>
          <CreatePostForm handleClose={handleClose} />
        </div>
      </Modal>
    </Box>
  );
};

export default Button;
