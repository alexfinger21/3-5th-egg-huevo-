document.getElementById("location-selector").addEventListener("click", getLocation);


function getLocation(){
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

    function success(pos) {
        const crd = pos.coords;
        console.log('Your current position is:');
        console.log('Latitude : ${crd.latitude}');
        console.log('Longitude: ${crd.longitude}');
        console.log('More or less ${crd.accuracy} meters.');

        const geocoder = new google.maps.Geocoder();

        const latlng = {
            lat: parseFloat(crd.latitude),
            lng: parseFloat(crd.longitude),
          };

          geocoder
            .geocode({ location: latlng })
            .then((response) => {
              if (response.results[0]) {
                console.log(response.results[4].formatted_address)
                console.log(response.results[6].formatted_address)

                let res
                let comma = 0
                for (let i = 0; i<response.results[6].formatted_address.length; i++) {
                    if (response.results[6].formatted_address[i] == ",") {
                        comma++
                    }

                    if (comma == 2) {
                        res = response.results[6].formatted_address.substring(0, i)
                        console.log(i)
                        break
                    }
                }

                console.log(res)
              }
            })
    }

    function error(err) {
    console.warn('ERROR(${err.code}): ${err.message}');
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}
