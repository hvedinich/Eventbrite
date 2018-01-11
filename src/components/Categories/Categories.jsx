import React from 'react';
import PropTypes from 'prop-types';
import Category from '../Category';

import './Categories.less'

class Categories extends React.Component {
    addCategory = (event) => {
      this.props.toggleCategory(event.currentTarget.firstElementChild.id)
    }

    render() {
      return (
        <div className="Categories">
          <h3 className="Categories__header"> Categories </h3>
          <div className="Categories__container">
            {this.props.categories.map(elem => (
              <Category
                onClick={this.addCategory}
                key={elem.id}
                id={elem.id}
                name={elem.name}
              />
            ))}
          </div>
        </div>
      )
    }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleCategory: PropTypes.func.isRequired,
};

export default Categories
