const token = 'YRJ74QAOMZ7LD7YLI2W4';
const host = 'https://www.eventbriteapi.com/v3/';


export const eventSearchURL = (city, event, categories) => {
  const cityParam = city ? `&location.address=${city}` : ''
  const categoriesParam = categories.length ? `&categories=${categories.join(',')}` : ''
  const qParam = event ? `&q=${event}` : ''
  return `${host}events/search/?token=${token}${cityParam}${categoriesParam}${qParam}`
}

export const noImage = 'https://cdn.evbstatic.com/s3-build/perm_001/f8c5fa/django/images/discovery/default_logos/4.png'
