import React from 'react';

const NotFoundComponent = React.lazy(() => import('../../Components/NotFound/NotFoundComponent'));

const ContinentsSolutionRoutes = [
  {
    path: '/continents(/select-continent)?',
    exact: true,
    component: NotFoundComponent
  },
  {
    path: '/continents/continent-details',
    component: NotFoundComponent
  },
  {
    path: '/continents/*',
    component: NotFoundComponent
  }
];

export default ContinentsSolutionRoutes;
