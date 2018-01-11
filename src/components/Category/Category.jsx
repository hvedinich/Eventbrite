import React from 'react';
import PropTypes from 'prop-types';

import './Category.less';

const Category = props => (
  <div onClick={props.onClick}>
    <input type="checkbox" id={props.id} />
    <label htmlFor={props.id}>{props.name}</label>
  </div>
);

Category.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Category;
