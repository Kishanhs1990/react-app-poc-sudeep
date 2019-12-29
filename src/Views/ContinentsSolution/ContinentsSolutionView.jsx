import React from 'react';

import RouteSwitcher from '../../Router/RouteSwitcher';
import ContinentsSolutionRoutes from './ContinentsSolutionRoutes';

const ContinentsSolutionView = () => {
  const labels = [
    ['/continents/select-continents', 'Select Continent'],
    ['/continents/continent-details', 'Continent Details']
  ];
  let titleName = 'Continents';
  labels.forEach(([urlString, actualTitle]) => {
    if (window.location.pathname.includes(urlString)) titleName = actualTitle;
  });
  return (
    <div className="box">
      <div className="title-box">{titleName}</div>
      <div className="box-content">
        <RouteSwitcher routes={ContinentsSolutionRoutes} />
      </div>
    </div>
  );
};

export default ContinentsSolutionView;
