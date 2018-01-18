import React from 'react';
import PropTypes from 'prop-types';
import CityAutocompete from '../CityAutocomplete';

import './SearchBar.less';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      event: '',
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const selectedCategory = this.props.categories.reduce((previous, current) => {
      if (current.selected) {
        previous.push(current.id)
      }
      return previous
    }, [])
    this.props.getEvents(this.state.city, this.state.event, selectedCategory)
  }

  cityAutocompeteHandler = (data) => {
    const formattedCity = data.formatted_address.replace(' ', '')
    this.setState({ city: formattedCity })
  }

  inputOnChangeHandler = (e) => {
    this.setState({ event: e.target.value })
  }

  cityOnChangeHandler = (e) => {
    const formattedCity = e.target.value.replace(' ', '')
    this.setState({ city: formattedCity })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="SearchBar">
          <div className="SearchBar-width">
            <input
              className="SearchBar__input border-radius-left"
              name="event"
              type="text"
              autoComplete="off"
              placeholder="Search event or categories"
              onChange={this.inputOnChangeHandler}
            />
          </div>
          <div className="SearchBar-width">
            <CityAutocompete
              className="SearchBar__input"
              onPlaceSelected={this.cityAutocompeteHandler}
              onChange={this.cityOnChangeHandler}
            />
          </div>
          <button
            className="SearchBar__button border-radius-right"
            type="submit"
          >SEARCH
          </button>
        </div>
      </form>
    )
  }
}
