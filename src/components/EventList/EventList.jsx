import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event';
import getLocalAddress from '../../lib/getLocalAddress'

import './EventList.less';
import Preloader from '../Preloader';

class EventList extends React.Component {
  componentWillMount() {
    getLocalAddress().then((address) => {
      this.props.getEvents(address);
    });
  }

  renderEventList = () => this.props.events.map((event) => {
    const newEvent = {
      logo: event.logo,
      title: event.name.text,
      date: event.start.utc,
      capacity: event.capacity,
      payment: event.is_free,
      description: event.description.text,
    };
    return (
      <div key={event.id} className="EventList__event">
        <Event event={newEvent} />
      </div>
    );
  })

  render() {
    return (
      <div className="EventList">
        {this.props.fetching ?
          <Preloader /> : this.renderEventList()}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  getEvents: PropTypes.func.isRequired,
}

export default EventList;
