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
import { SnackbarContext } from '../../../context/SnackbarContext';
import api from '../../../utils/api';
import {
  REGEXP_EMAIL,
  USER_DIALOG_KINDS,
  VALIDATE_MESSAGE,
} from '../../../utils/constants';
import { Close as CloseIcon } from '@mui/icons-material';

const ResetPasswordForm = ({ onDialogKindChange, onClose }) => {
  const { setMessage } = useContext(SnackbarContext);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    api
      .requestPasswordReset(data)
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

  const emailRegisterProps = register('email', {
    required: VALIDATE_MESSAGE.requiredMessage,
    pattern: {
      value: REGEXP_EMAIL,
      message: VALIDATE_MESSAGE.emailMessage,
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

  const onRegister = useCallback(
    (evt) => {
      evt.preventDefault();
      onDialogKindChange(USER_DIALOG_KINDS.registration);
    },
    [onDialogKindChange]
  );

  return (
    <Box p={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" align="center">
          Восстановление пароля
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

        <Typography variant="caption" lineHeight={1}>
          Для получения временного пароля необходимо ввести email, указанный при
          регистрации.
        </Typography>

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
          <Button fullWidth type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </Box>

        <Box my={1}>
          <Link href="#" onClick={onAuthorization}>
            Войти
          </Link>
        </Box>
        <Box my={1}>
          <Link href="#" onClick={onRegister}>
            Зарегистрироваться
          </Link>
        </Box>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
