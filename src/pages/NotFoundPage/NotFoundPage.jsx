import React from 'react';
import NotFound from '../../components/NotFound/NotFound';

const NotFoundPage = () => {
  return (
    <NotFound
      title="Простите, по вашему запросу постов не найдено."
      buttonText="На главную"
      href="/"
    />
  );
};

export default NotFoundPage;
