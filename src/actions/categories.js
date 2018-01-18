import { TOGGLE_CATEGORY } from '../constants/search';

export const toggleCategory = id => ({
  type: TOGGLE_CATEGORY,
  id,
});

export default toggleCategory;
