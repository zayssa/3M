import React, { useRef } from 'react';
import { Button as ButtonMui, Box, Typography, Modal } from '@mui/material';

import CreatePostForm from '../Forms/CreatePostForm/CreatePostForm';

const PostListHead = () => {
  const postEditForm = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    postEditForm.current.resetForm();
  };
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: 150,
        marginTop: 5,
        position: "relative",
        marginBottom: 10,
      }}
    >
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
        color="primary"
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
          <CreatePostForm handleClose={handleClose} ref={postEditForm} />
        </div>
      </Modal>
    </Box>
  );
};

export default PostListHead;
