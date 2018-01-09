import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventList from "../components/EventList";

const mapStateToProps = state => ({
    "events": state.event,
  });
  
  
const EventListContainer = connect(mapStateToProps)(EventList);



export default EventListContainer