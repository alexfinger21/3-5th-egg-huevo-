

window.addEventListener("load", () => {
  document.getElementById("location-selector").addEventListener("click", getLocation);

  jSuites.dropdown(document.getElementById('dropdown'), {
    url: '/v4/large',
    autocomplete: true,
    lazyLoading: true,
    multiple: false,
    width: '100vh',
    placeholder: 'Enter a state to get started',
  data: ["no", "try again", "another city"]
  });

  document.body.addEventListener("keydown", function(key) {
    const index = Array.from(document.querySelectorAll("input")).indexOf(document.activeElement)

    if (index >= 0) {
      const start = this.selectionStart

    // Get last typed character
    console.log(this, this.value)

      sendQueryReq({type: "state", info: Array.from(document.querySelectorAll("input"))[index].value + key.key})
    }
  })

  function sendQueryReq(data) {
      console.log(data)
      $.ajax({
        type: "POST",
        contentType: "application/json",   
        url: window.location.href.substring( 0, window.location.href.lastIndexOf( "/" ) + 1) + "autocomplete",
        data: JSON.stringify(data),
        success: function(response) {
            console.log(response)
            console.log(response[0])
        },

        error: function(jqXHR, textStatus, errorThrown)
        {
            console.log("Error\n" + errorThrown, jqXHR)
        },
    })
  }

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
})