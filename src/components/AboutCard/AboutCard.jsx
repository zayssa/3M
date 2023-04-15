import { useContext } from "react";
import s from "./AboutCard.module.css";
import { UserContext } from "../../context/UserContext";


const AboutCard = ({ avatar, name, about }) => {

  console.log("avatar, name, about", avatar, name, about);

  return (
    <>
      <div className={s.card}>
        <h3>{name}</h3>
        <img src={avatar} alt="Фото" />
        <p>{about}</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          quibusdam, ducimus velit placeat fugiat deleniti enim nisi incidunt
          ab, perferendis neque magnam ipsum adipisci sit, perspiciatis quae
          nostrum laboriosam culpa. Nesciunt eos obcaecati explicabo quas
          nostrum cumque animi fugiat harum esse. Saepe quas id voluptatem
          exercitationem, quia consequatur maxime, aliquid deserunt provident
          velit nulla nesciunt adipisci esse deleniti placeat fugit!
        </p>
      </div>
    </>
  );
};

export default AboutCard;
