import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventList from '../components/EventList';
import { getEvents } from '../actions/event';

const mapStateToProps = state => ({
  events: state.event.events,
  fetching: state.event.isFetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents,
}, dispatch)

const EventListContainer = connect(mapStateToProps, mapDispatchToProps)(EventList);

export default EventListContainer
