import React, { useContext, useEffect } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import { URLS } from '../../utils/constants';

const NotFoundPage = () => {
  const { addBreadcrumbsPoint } = useContext(BreadcrumbsContext);

  useEffect(() => {
    addBreadcrumbsPoint({
      label: 'Неизвестная страница',
    });
  }, [addBreadcrumbsPoint]);

  return (
    <NotFound
      title="Простите, по вашему запросу постов не найдено."
      buttonText="На главную"
      href={`/${URLS.main}`}
    />
  );
};

export default NotFoundPage;
