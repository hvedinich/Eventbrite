import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Categories from '../components/Categories';
import { toggleCategory } from '../actions/categories';

const mapStateToProps = state => ({
  categories: state.search.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleCategory,
}, dispatch);

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);

export default CategoriesContainer;
