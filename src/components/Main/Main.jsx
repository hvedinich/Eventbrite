import React from 'react';
import PropTypes from 'prop-types';
import CategoriesContainer from '../../containers/CategoriesContainer';
import EventListContainer from '../../containers/EventListContainer';

import './Main.less';

const Main = () => (
  <div className="Main">
    <div className="Main__events">
      <EventListContainer />
    </div>
    <div className="Main__categories">
      <CategoriesContainer />
    </div>
  </div>)

export default Main
