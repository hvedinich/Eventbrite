import * as types from '../constants/search';
import categories from './categories';


const initialState = {
  pagination: {
    object_count: 21,
    page_number: 1,
    page_size: 50,
    page_count: 1,
    has_more_items: false,
  },
  categories: [
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/103/',
      id: '103',
      name: 'Music',
      name_localized: 'Music',
      short_name: 'Music',
      short_name_localized: 'Music',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/101/',
      id: '101',
      name: 'Business & Professional',
      name_localized: 'Business & Professional',
      short_name: 'Business',
      short_name_localized: 'Business',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/110/',
      id: '110',
      name: 'Food & Drink',
      name_localized: 'Food & Drink',
      short_name: 'Food & Drink',
      short_name_localized: 'Food & Drink',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/113/',
      id: '113',
      name: 'Community & Culture',
      name_localized: 'Community & Culture',
      short_name: 'Community',
      short_name_localized: 'Community',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/105/',
      id: '105',
      name: 'Performing & Visual Arts',
      name_localized: 'Performing & Visual Arts',
      short_name: 'Arts',
      short_name_localized: 'Arts',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/104/',
      id: '104',
      name: 'Film, Media & Entertainment',
      name_localized: 'Film, Media & Entertainment',
      short_name: 'Film & Media',
      short_name_localized: 'Film & Media',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/108/',
      id: '108',
      name: 'Sports & Fitness',
      name_localized: 'Sports & Fitness',
      short_name: 'Sports & Fitness',
      short_name_localized: 'Sports & Fitness',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/107/',
      id: '107',
      name: 'Health & Wellness',
      name_localized: 'Health & Wellness',
      short_name: 'Health',
      short_name_localized: 'Health',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/102/',
      id: '102',
      name: 'Science & Technology',
      name_localized: 'Science & Technology',
      short_name: 'Science & Tech',
      short_name_localized: 'Science & Tech',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/109/',
      id: '109',
      name: 'Travel & Outdoor',
      name_localized: 'Travel & Outdoor',
      short_name: 'Travel & Outdoor',
      short_name_localized: 'Travel & Outdoor',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/111/',
      id: '111',
      name: 'Charity & Causes',
      name_localized: 'Charity & Causes',
      short_name: 'Charity & Causes',
      short_name_localized: 'Charity & Causes',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/114/',
      id: '114',
      name: 'Religion & Spirituality',
      name_localized: 'Religion & Spirituality',
      short_name: 'Spirituality',
      short_name_localized: 'Spirituality',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/115/',
      id: '115',
      name: 'Family & Education',
      name_localized: 'Family & Education',
      short_name: 'Family & Education',
      short_name_localized: 'Family & Education',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/116/',
      id: '116',
      name: 'Seasonal & Holiday',
      name_localized: 'Seasonal & Holiday',
      short_name: 'Holiday',
      short_name_localized: 'Holiday',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/112/',
      id: '112',
      name: 'Government & Politics',
      name_localized: 'Government & Politics',
      short_name: 'Government',
      short_name_localized: 'Government',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/106/',
      id: '106',
      name: 'Fashion & Beauty',
      name_localized: 'Fashion & Beauty',
      short_name: 'Fashion',
      short_name_localized: 'Fashion',
    },
    {
      resource_uri: 'https://www.eventbriteapi.com/v3/categories/117/',
      id: '117',
      name: 'Home & Lifestyle',
      name_localized: 'Home & Lifestyle',
      short_name: 'Home & Lifestyle',
      short_name_localized: 'Home & Lifestyle',
    },
  ],
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return { ...initialState };
    case types.TOGGLE_CATEGORY:
      return (
        Object.assign({}, state, {
          categories: state.categories.map(elem =>
            categories(elem, action)),
        }))


    default: return state;
  }
};

export default search;