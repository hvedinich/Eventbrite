import * as types from '../constants/search';

const categories = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_CATEGORY:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        selected: !state.selected,
      };

    default:
      return state;
  }
}

export default categories
