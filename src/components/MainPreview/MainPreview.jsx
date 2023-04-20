import React from "react";
import s from "./MainPreview.module.css";
import { Box, Button, Container, Typography } from "@mui/material";
import { ReactComponent as Arrow } from "./img/right-arrow.svg";

const MainPreview = () => {
  return (
    <>
      <Box className={s.main}>
        <Container>
          <Box className={s.quote}>
            <Typography
              className={s.text}
              variant="h4"
              sx={{
                fontFamily: "Bad Script",
              }}
              color="#1976D2"
            >
              «Чтение хороших книг – это разговор с самыми лучшими людьми
              прошедших времен, и притом такой разговор, когда они сообщают нам
              только лучшие свои мысли.»
            </Typography>
            <Typography
              className={s.author}
              variant="h6"
              textAlign="right"
              color="#1976D2"
              sx={{ marginTop: 2, marginRight: 3 }}
            >
              Рене Декарт
            </Typography>
            <Button
              href="/posts"
              className={s.button}
              variant="contained"
            >
              Все посты
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MainPreview;
