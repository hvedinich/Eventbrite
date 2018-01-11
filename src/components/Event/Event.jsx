
import React from 'react';
import PropTypes from 'prop-types';
import EventDescription from '../EventDescription'

import './Event.less';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  getDate() {
    let date = Date.parse(this.props.event.date);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    };
    date = new Date(date);
    return date.toLocaleString('en-US', options);
  }

    showMore = () => {
      this.setState({ active: !this.state.active })
    }

    render() {
      return (
        <div className="Event">
          <div className="Event__container" onClick={this.showMore}>
            <div className="event__logo">
              <img className="event__img" alt="logo" src={this.props.event.logo} />
            </div>
            <div className="event__description">description{this.props.event.title}</div>
            <div className="event__date">{this.getDate()}</div>
            <div className="event__capacity">Capacity {this.props.event.capacity}</div>
            <div className="event__price">{this.props.event.payment ? 'Free' : 'Paid'}</div>
          </div>
          {this.state.active ?
            <EventDescription
              description={this.props.event.description}
            /> : null}
        </div>)
    }
}

Event.propTypes = {
  event: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    payment: PropTypes.bool.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
}

export default Event
