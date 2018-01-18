import * as type from '../constants/events';
import { eventSearchURL, noImage } from '../lib/api'

export const getEvents = (city, event, category) => (dispatch) => {
  dispatch({ type: type.GET_EVENTS_REQUEST })

  const url = eventSearchURL(city, event, category)
  fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  }).then((json) => {
    const data = json.events.map(event => ({
      capacity: event.capacity,
      start: event.start,
      is_free: event.is_free,
      logo: event.logo ? event.logo.url : noImage,
      id: event.id,
      description: event.description,
      name: event.name,
      category_id: event.category_id,
    }))
    dispatch({
      type: type.GET_EVENTS_SUCCESS,
      data,
    })
  }).catch((error) => {
    console.log(`There has been a problem with your fetch operation: ${error.message}`);
  });
};

export default getEvents
