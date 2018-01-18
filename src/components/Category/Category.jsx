import React from 'react';
import PropTypes from 'prop-types';

import './Category.less';

const Category = props => (
  <div className="Category">
    <label className="Category__label" htmlFor={props.id}>
      {props.name}
      <input
        className="Category__input"
        type="checkbox"
        id={props.id}
        onClick={props.clickHandler}
      />
      <span className="checkmark" />
    </label>
  </div>
);

Category.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Category;
