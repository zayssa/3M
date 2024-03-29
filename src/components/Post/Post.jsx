import React, { useCallback, useContext, useMemo, useState } from 'react';
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import {
  Favorite,
  ExpandMore,
  Delete,
  Comment as CommentIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

import { UserContext } from '../../context/UserContext';
import { PostContext } from '../../context/PostContext';
import s from './Post.module.css';
import { isLiked } from '../../utils/post';
import api from '../../utils/api';
import { Link } from 'react-router-dom';
import PostSkeleton from '../PostSkeleton/PostSkeleton';

dayjs.locale('ru');
dayjs.extend(relativeTime);

const ExpandMoreStyled = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));

const Post = ({ post }) => {
  const { getPostsList, handlePostLike, isLoading } = useContext(PostContext);
  const { currentUser } = useContext(UserContext);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isPostLiked = useMemo(
    () => isLiked(post.likes, currentUser._id),
    [post.likes, currentUser._id]
  );

  const handleLike = useCallback(() => {
    handlePostLike(post);
  }, [post, handlePostLike]);

  const handleDelete = useCallback(() => {
    api.deletePost(post._id).then(() => {
      getPostsList();
    });
  }, [post._id, getPostsList]);

  return isLoading ? (
    <PostSkeleton />
  ) : (
    <Grid container item xs={12} sm={6} md={4} lg={3}>
      <Card className={s.post}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={post.author.avatar}>
              {post.author.name?.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          title={post.author.name}
          subheader={dayjs(post.created_at).fromNow()}
        />
        <Link to={`/posts/${post._id}`} className={s.postHeaderLink}>
          <CardMedia
            component="img"
            height="194"
            image={post.image}
            alt={`Изображение_${post.title}`}
          />
          <CardContent
            sx={{
              flex: 1,
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              {post.title}
            </Typography>

            <Typography variant="body2" noWrap color="text.secondary">
              {post.text}
            </Typography>

            <Stack
              className={s.chips}
              spacing={0.5}
              flexWrap="wrap"
              direction="row"
              margin="10px 0px 0px 0px"
              alignItems="center"
            >
              {post.tags &&
                post.tags
                  .filter((tag) => tag.length > 0)
                  .map((tag, idx) => (
                    <Stack margin="5px 0px" className={s.chip} key={tag}>
                      <Chip
                        key={idx}
                        color="primary"
                        label={tag}
                        size="small"
                        sx={{ marginRight: 1 }}
                      />
                    </Stack>
                  ))}
            </Stack>
          </CardContent>
        </Link>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            <Badge
              badgeContent={post.likes.length}
              color="primary"
              size="small"
            >
              <Favorite color={isPostLiked ? 'error' : 'grey'} />
            </Badge>
          </IconButton>

          {post.author._id === currentUser._id && (
            <IconButton sx={{ marginLeft: 2 }} onClick={handleDelete}>
              <Delete />
            </IconButton>
          )}

          <IconButton aria-label="add to comments">
            <Badge
              badgeContent={post.comments.length}
              color="primary"
              size="small"
            >
              <CommentIcon />
            </Badge>
          </IconButton>

          <ExpandMoreStyled
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </ExpandMoreStyled>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{post.text}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Post;
