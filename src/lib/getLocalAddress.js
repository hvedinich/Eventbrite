function getAddressInString(results) {
  const location = {};
  results[0].address_components.forEach((adr) => {
    if (adr.types) {
      adr.types.forEach((elem) => {
        if (elem === 'country') {
          if (!location.country) {
            location.country = adr.long_name;
          }
        }
        if (elem === 'administrative_area_level_1') {
          if (!location.administrative) {
            location.administrative = adr.long_name;
          }
        }
      })
    }
  })
  return `${location.country},${location.administrative}`.replace(' ', '')
}

function getCoordinates() {
  return new Promise(((resolve) => {
    navigator.geolocation.getCurrentPosition(resolve);
  }))
}

function googleGeocoder(latlng) {
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latlng }, (result, status) => {
      if (status === 'OK') {
        if (result[0]) {
          resolve(result)
        } else {
          reject(new Error(`Response status = ${status}`))
        }
      }
    })
  })
}

async function getLocalAddress() {
  const coordinates = await getCoordinates();
  const latlng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
  const fullAddres = await googleGeocoder(latlng)
  return getAddressInString(fullAddres)
}

export default getLocalAddress
