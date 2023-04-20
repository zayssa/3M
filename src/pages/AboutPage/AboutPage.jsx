import React, { useContext, useEffect } from 'react';

import AboutCard from '../../components/AboutCard/AboutCard';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import { URLS } from '../../utils/constants';

const AboutPage = () => {
  const { addBreadcrumbsPoint } = useContext(BreadcrumbsContext);

  useEffect(() => {
    addBreadcrumbsPoint({
      label: 'О нас',
      url: `/${URLS.about}`,
    });
  }, [addBreadcrumbsPoint]);

  return (
    <>
      <h1>О нас</h1>
      <p>
        Мы - команда "3М". Сейчас нас 3,5 человека, но работаем над проектом
        вдвоем
      </p>
      <AboutCard />
    </>
  );
};

export default AboutPage;
