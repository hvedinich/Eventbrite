import React from 'react';
import PropTypes from 'prop-types';
import SearchBarContainer from '../../containers/SearchBarContainer';

import './Header.less';

const Header = () => (
  <div className="Header">
    <SearchBarContainer />
  </div>)

export default Header
