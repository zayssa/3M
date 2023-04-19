import React, { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  IconButton,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import {
  REGEXP_EMAIL,
  USER_DIALOG_KINDS,
  VALIDATE_MESSAGE,
} from '../../../utils/constants';
import api from '../../../utils/api';
import { SnackbarContext } from '../../../context/SnackbarContext';

const LoginForm = ({ onDialogKindChange, onClose }) => {
  const { setMessage } = useContext(SnackbarContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({ mode: 'onBlur' });

  const emailRegisterProps = register('email', {
    required: VALIDATE_MESSAGE.requiredMessage,
    pattern: {
      value: REGEXP_EMAIL,
      message: VALIDATE_MESSAGE.emailMessage,
    },
  });

  const passwordRegisterProps = register('password', {
    required: VALIDATE_MESSAGE.requiredMessage,
  });

  const onSubmit = (data) => {
    api
      .loginUser(data)
      .then(() => {
        setMessage({
          severity: 'success',
          text: 'Успешно',
          onClose: () => {
            window.location = '/';
          },
        });
      })
      .catch((err) => {
        err.then((data) => {
          const res = JSON.parse(data);
          setMessage({
            severity: 'error',
            text: res.message,
          });

          res.validation?.keys?.forEach((field) => {
            setError(field);
          });
        });
      });
  };

  const onRegister = useCallback(
    (evt) => {
      evt.preventDefault();
      onDialogKindChange(USER_DIALOG_KINDS.registration);
    },
    [onDialogKindChange]
  );

  const onRecovery = useCallback(
    (evt) => {
      evt.preventDefault();
      onDialogKindChange(USER_DIALOG_KINDS.recovery);
    },
    [onDialogKindChange]
  );

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [onClose, reset]);

  return (
    <Box p={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" align="center">
          Вход
        </Typography>

        <IconButton
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>

        <Box my={2}>
          <TextField
            type="email"
            {...emailRegisterProps}
            placeholder="Ваш email"
            size="small"
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        </Box>

        <Box my={2}>
          <TextField
            type="password"
            {...passwordRegisterProps}
            placeholder="Ваш пароль"
            size="small"
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
        </Box>

        <Box my={2}>
          <Button fullWidth type="submit" variant="contained" color="primary">
            Войти
          </Button>
        </Box>

        <Box my={1}>
          <Link href="#" onClick={onRegister}>
            Зарегистрироваться
          </Link>
        </Box>
        <Box my={1}>
          <Link href="#" onClick={onRecovery}>
            Забыли пароль?
          </Link>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
