import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import { getEvents } from '../actions/event';

const mapStateToProps = state => ({
  categories: state.search.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents,
}, dispatch)

const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);


export default SearchBarContainer
