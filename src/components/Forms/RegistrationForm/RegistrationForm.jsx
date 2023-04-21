import {
  Box,
  Button,
  IconButton,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import React, { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  REGEXP_EMAIL,
  REGEXP_GROUP,
  USER_DIALOG_KINDS,
  VALIDATE_MESSAGE,
} from '../../../utils/constants';
import { Close as CloseIcon } from '@mui/icons-material';
import api from '../../../utils/api';
import { SnackbarContext } from '../../../context/SnackbarContext';

const RegistrationForm = ({ onDialogKindChange, onClose }) => {
  const { setMessage } = useContext(SnackbarContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    api
      .registerUser(data)
      .then(() => {
        setMessage({
          severity: 'success',
          text: 'Успешно',
          onClose: () => {
            window.location = '/login';
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

  const groupRegisterProps = register('group', {
    required: VALIDATE_MESSAGE.requiredMessage,
    pattern: {
      value: REGEXP_GROUP,
      message: VALIDATE_MESSAGE.groupMessage,
    },
  });

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [onClose, reset]);

  const onAuthorization = useCallback(
    (evt) => {
      evt.preventDefault();
      onDialogKindChange(USER_DIALOG_KINDS.authorization);
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

  return (
    <Box p={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" align="center">
          Регистрация
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
          <TextField
            type="input"
            {...groupRegisterProps}
            placeholder="Номер группы"
            size="small"
            fullWidth
            error={Boolean(errors.group)}
            helperText={errors.group?.message}
          />
        </Box>

        <Typography variant="caption" lineHeight={1}>
          Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой
          конфиденциальности и соглашаетесь на информационную рассылку.
        </Typography>

        <Box my={2}>
          <Button fullWidth type="submit" variant="contained" color="primary">
            Зарегистрироваться
          </Button>
        </Box>

        <Box my={1}>
          <Link href="#" onClick={onAuthorization}>
            Войти
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

export default RegistrationForm;
