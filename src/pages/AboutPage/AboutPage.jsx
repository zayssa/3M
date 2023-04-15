import { useContext } from "react";
import About from "../../components/AboutCard/AboutCard";
import s from "./AboutPage.module.css";
import { PostContext } from "../../context/PostContext";
import AboutCard from "../../components/AboutCard/AboutCard";
import { UserContext } from "../../context/UserContext";

const AboutPage = () => {

  const { currentUser } = useContext(UserContext);


  
  return (
    <>
      <h1>О нас</h1>
      <p>
        Мы - команда "3М". Сейчас нас 4,5 человека, но работаем над проектом
        вдвоем
      </p>
      <AboutCard currentUser={currentUser} {...currentUser} />
    </>
  );
};

export default AboutPage;
