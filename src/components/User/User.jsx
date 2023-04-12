import React from "react";
import { Typography, Box, Avatar, Button, Modal } from "@mui/material";
import UserForm from "../Forms/UserForm/UserForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const User = ({ avatar, name, about }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: {
          md: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          marginLeft: 20,
        },
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
        <Typography color="gray">{about}</Typography>
      </Box>
      <div>
        <Button onClick={handleOpen}>
          <Avatar
            aria-label="recipe"
            src={avatar}
            sx={{ marginLeft: 2 }}
          ></Avatar>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <UserForm />
          </Box>
        </Modal>
      </div>
    </Box>
  );
};

export default User;
