import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-google-autocomplete';

import './CityAutocomplete.less';

const CityAutocomlete = props => (
  <Autocomplete
    className={props.className}
    placeholder="City or location"
    onPlaceSelected={props.onPlaceSelected}
    onChange={props.onChange}
    types={['(regions)']}
  />
);
CityAutocomlete.propTypes = {
  className: PropTypes.string,
  onPlaceSelected: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

CityAutocomlete.defaultProps = {
  className: '',
}
export default CityAutocomlete;
