import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Box,
  Avatar,
  IconButton,
  Badge,
  Button,
  Dialog,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

import { UserContext } from '../../context/UserContext';
import { PostContext } from '../../context/PostContext';
import { URLS, USER_DIALOG_KINDS } from '../../utils/constants';
import LoginForm from '../Forms/LoginForm/LoginForm';
import RegistrationForm from '../Forms/RegistrationForm/RegistrationForm';
import ResetPasswordForm from '../Forms/ResetPasswordForm/ResetPasswordForm';
import api from '../../utils/api';
import { SnackbarContext } from '../../context/SnackbarContext';

const User = () => {
  const { currentUser } = useContext(UserContext);
  const { favourites } = useContext(PostContext);
  const { setMessage } = useContext(SnackbarContext);

  const [dialogKind, setDialogKind] = useState(null);

  const isOpen = useMemo(() => {
    return Boolean(dialogKind);
  }, [dialogKind]);

  const onDialogOpen = useCallback(() => {
    setDialogKind(USER_DIALOG_KINDS.authorization);
  }, []);
  const onDialogClose = useCallback(() => {
    setDialogKind(null);
  }, []);

  const onLogOut = useCallback(() => {
    api.logoutUser().then(() => {
      setMessage({
        severity: 'success',
        text: 'Успешно',
        onClose: () => {
          window.location = '/';
        },
      });
    });
  }, [setMessage]);

  return !currentUser ? (
    <>
      <Button variant="contained" color="primary" onClick={onDialogOpen}>
        Войти
      </Button>

      <Dialog open={isOpen} maxWidth="xs">
        {dialogKind === USER_DIALOG_KINDS.authorization ? (
          <LoginForm
            onDialogKindChange={setDialogKind}
            onClose={onDialogClose}
          />
        ) : dialogKind === USER_DIALOG_KINDS.registration ? (
          <RegistrationForm
            onDialogKindChange={setDialogKind}
            onClose={onDialogClose}
          />
        ) : dialogKind === USER_DIALOG_KINDS.recovery ? (
          <ResetPasswordForm
            onDialogKindChange={setDialogKind}
            onClose={onDialogClose}
          />
        ) : (
          'Whoopsy!'
        )}
      </Dialog>
    </>
  ) : (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      gap={1}
    >
      <IconButton
        component={Link}
        to={{ pathname: `/${URLS.posts}/${URLS.favourites}` }}
      >
        <Badge badgeContent={favourites?.length} color="primary">
          <FavoriteIcon />
        </Badge>
      </IconButton>

      <Box pl={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Typography sx={{ fontWeight: 700 }} lineHeight={1}>
          {currentUser.name}
        </Typography>
        <Typography variant="caption">{currentUser.about}</Typography>
      </Box>

      <IconButton component={Link} to={`/${URLS.user}`}>
        <Avatar src={currentUser.avatar} alt={currentUser.name}></Avatar>
      </IconButton>

      <IconButton size="large" edge="end" color="inherit" onClick={onLogOut}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

export default User;
