import { connect } from 'react-redux';
import EventList from '../components/EventList';

const mapStateToProps = state => ({
  events: state.event.events,
  fetching: state.event.isFetching,
});


const EventListContainer = connect(mapStateToProps)(EventList);


export default EventListContainer
