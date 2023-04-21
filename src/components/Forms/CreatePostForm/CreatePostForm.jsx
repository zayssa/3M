import React, {
  useCallback,
  useContext,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import s from './CreateFormPost.module.css';
import { useForm } from 'react-hook-form';
import api from '../../../utils/api';
import {
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Close as CloseIcon } from '@mui/icons-material';
import { PostContext } from '../../../context/PostContext';

const CreatePostForm = forwardRef(({ handleClose, postData, onSave }, ref) => {
  const { getPostsList } = useContext(PostContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: postData?.title,
      text: postData?.text,
      image: postData?.image,
      tags: postData?.tags?.join(','),
    },
  });

  useEffect(() => {
    reset({
      title: postData?.title,
      text: postData?.text,
      image: postData?.image,
      tags: postData?.tags?.join(','),
    });
  }, [postData, reset]);

  const onSubmitHandler = useCallback(
    async (newData) => {
      if (!postData) {
        return api.addNewPost(newData).then(() => {
          getPostsList();
        });
      }
      return api.changePost(postData._id, newData).then(() => {
        if (onSave) {
          onSave();
        }
      });
    },
    [postData, onSave, getPostsList]
  );

  const onSubmit = (data) => {
    onSubmitHandler({
      ...data,
      tags: data.tags
        .split(',')
        .map((word) => word.replace(/^\s+|\s+$/g, ''))
        .filter((word) => word !== ''),
    });
    handleClose(true);
  };

  useImperativeHandle(ref, () => ({
    resetForm() {
      reset({
        title: '',
        text: '',
        image: '',
        tags: '',
      });
    },
  }));

  return (
    <Paper
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        maxWidth: 400,
        p: 4,
        pt: 3,
        // display: { xs: 'block', alignItems: 'center' },
      }}
    >
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" align="center">
          {!postData ? 'Новый пост' : 'Редактирование поста'}
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
            type="text"
            size="small"
            fullWidth
            placeholder="Заголовок"
            {...register('title', {
              required: 'Поле не может быть пустым',
            })}
            error={errors?.title}
            helperText={errors?.title && errors.title.message}
          />
        </Box>
        <Box my={2}>
          <TextField
            type="text"
            size="small"
            fullWidth
            multiline
            maxRows={5}
            placeholder="Описание"
            {...register('text', {
              required: 'Поле не может быть пустым',
            })}
            error={errors?.text}
            helperText={errors?.text && errors.text.message}
          />
          {errors && errors.description ? (
            <div>
              <p className={s.errorMessage}>{errors.text.message}</p>
            </div>
          ) : null}
        </Box>
        <Box my={2}>
          <TextField
            type="text"
            size="small"
            fullWidth
            placeholder="Ссылка на картинку"
            {...register('image')}
          />
        </Box>
        <Box my={2}>
          <TextField
            type="text"
            size="small"
            fullWidth
            placeholder="Введите теги через запятую"
            {...register('tags')}
          />
        </Box>
        <Box my={2}>
          <Button type="submit" fullWidth color="primary" variant="contained">
            {postData ? 'Сохранить' : 'Создать'}&nbsp;пост
          </Button>
        </Box>
        <Box my={2}>
          <Button
            fullWidth
            color="error"
            variant="outlined"
            onClick={handleClose}
          >
            Отмена
          </Button>
        </Box>
      </form>
    </Paper>
  );
});

export default CreatePostForm;
