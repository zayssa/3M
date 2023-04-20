import React, { useContext, useEffect } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import { URLS } from '../../utils/constants';

const NotFoundPage = () => {
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    setBreadcrumbs([
      {
        label: 'Неизвестная страница',
      },
    ]);
  }, [setBreadcrumbs]);

  return (
    <NotFound
      title="Простите, по вашему запросу постов не найдено."
      buttonText="На главную"
      href={`/${URLS.main}`}
    />
  );
};

export default NotFoundPage;
