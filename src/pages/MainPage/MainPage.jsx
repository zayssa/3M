import React, { useContext, useEffect } from 'react';

import MainPreview from '../../components/MainPreview/MainPreview';
import MainRecomend from '../../components/MainRecommend/MainRecommend';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';

const MainPage = () => {
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    setBreadcrumbs([]);
  }, [setBreadcrumbs]);

  return (
    <>
      <MainPreview />
    </>
  );
};

export default MainPage;
