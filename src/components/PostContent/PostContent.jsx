import React from "react";
import cn from "classnames";
import s from "./PostContent.module.css";
import { useNavigate } from "react-router";


const PostContent = ({ title, image, text, created_at, author }) => {
    const navigate = useNavigate();
   return (
     <main className={cn(s.post, s.container)}>
       <a className={s.battonBack } href="#" onClick={() => navigate(-1)}>
         Назад
       </a>
       <h2 className={s.title}>{title}</h2>
       <img className={s.image} src={image} alt="photo" />
       <p>{text}</p>
       <p>{`Создано ${created_at}`}</p>
       {/* <p>{`Автор: ${author.name}`}</p> */}
     </main>
   );
};

export default PostContent;
