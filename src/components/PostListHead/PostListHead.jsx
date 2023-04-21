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
    <Box mt={2} mb={4} position="relative">
      <Typography
        sx={{
          fontFamily: 'Pangolin',
        }}
        textAlign="center"
        variant="h3"
      >
        Мысли, мечтай, меняйся...
      </Typography>
      <Box
        mt={2}
        sx={{
          display: 'flex',
          justifyContent: { md: 'flex-end' },
        }}
      >
        <ButtonMui
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ flexGrow: { xs: 1, md: 0 } }}
        >
          Создать пост
        </ButtonMui>
      </Box>
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
