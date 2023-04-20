import React, { useContext, useMemo } from 'react';
import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';

const Breadcrumbs = () => {
  const { breadcrumbs } = useContext(BreadcrumbsContext);

  return (
    <Box py={2}>
      <MuiBreadcrumbs>
        {breadcrumbs.map((point, idx) =>
          idx === breadcrumbs.length - 1 ? (
            <span key={point.label + idx}>{point.label}</span>
          ) : (
            <MuiLink component={Link} to={point.url} key={point.label + idx}>
              {point.label}
            </MuiLink>
          )
        )}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
