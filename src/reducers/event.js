
import * as type from '../constants/events';

const initialState = {
  events: [],
  isFetching: false,
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_EVENTS:
      return { ...action.data };
    case type.GET_EVENTS_REQUEST:
      return { ...state, isFetching: true }
    case type.GET_EVENTS_SUCCESS:
      return { events: action.data, isFetching: false }
    default: return state;
  }
}

export default events
