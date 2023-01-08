let jsuite;
let jsuitedata = {};
window.addEventListener("load", () => {
  jsuite = jSuites.dropdown(document.getElementById("dropdown"), {
    url: "/v4/large",
    autocomplete: true,
    lazyLoading: true,
    multiple: false,
    width: "100vh",
    placeholder: "Enter a state to get started",
    data: [],
  });

  function sendQueryReq(data) {
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url:
        window.location.href.substring(
          0,
          window.location.href.lastIndexOf("/") + 1
        ) + "autocomplete",
      data: JSON.stringify(data),
      success: function (response) {
        jsuite = jSuites.dropdown(document.getElementById("dropdown"), {
          url: "/v4/large",
          autocomplete: true,
          lazyLoading: true,
          multiple: false,
          width: "100vh",
          placeholder: "Enter a state to get started",
          data: response,
        });

        let debounce = false
        let selectedItem

        console.log(document.getElementsByClassName("jdropdown-item"))

        Array.from(document.getElementsByClassName("jdropdown-item")).forEach((x) =>  {
          console.log(x)
          function checkForChanges() {
            console.log(x.classList.contains("jdropdown-selected"))
          if (x.classList.contains("jdropdown-selected")) {
            selectedItem = x

            document.querySelector(".select-location").style.transition = "all 500ms"
            document.querySelector(".or").style.transition = "all 500ms"
            document.querySelector(".or").style.opacity = 0
            document.querySelector(".select-location").style.opacity = 0
            document.querySelector("#dropdown2").style.opacity = 1

              jsuite = jSuites.dropdown(document.getElementById("dropdown2"), {
                url: "/v4/large",
                autocomplete: true,
                lazyLoading: true,
                multiple: false,
                width: "100vh",
                placeholder: "Enter a city or county name",
                data: {},
              })

              data = {type: "county", state: selectedItem.children[0].textContent}

            $.ajax({
              type: "POST",
              contentType: "application/json",
              url:
                window.location.href.substring(
                  0,
                  window.location.href.lastIndexOf("/") + 1
                ) + "autocomplete",
              data: JSON.stringify(data),
              success: function (response) {
                jsuite = jSuites.dropdown(document.getElementById("dropdown2"), {
                  url: "/v4/large",
                  autocomplete: true,
                  lazyLoading: true,
                  multiple: false,
                  width: "100vh",
                  placeholder: "Enter a city or county name",
                  data: response,
                })

                let selectedItem2 
                Array.from(document.getElementById("dropdown2").children[1].children[1].children).forEach((item) => {
                  function checkForChanges2() {
                    console.log(x.classList.contains("jdropdown-selected"))
                  if (x.classList.contains("jdropdown-selected")) {
                    selectedItem2 = item
                    sessionStorage.setItem('CITY', selectedItem2.children[0].textContent);
                    sessionStorage.setItem('STATE', selectedItem.children[0].textContent);

                  }
                }
                })
              }
            })

          }else{
            if (!selectedItem) {
              setTimeout(checkForChanges, 500);
            }
          }
          
        }
        checkForChanges()
        })


      },
    });

    
  }
function getLocation() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      function success(pos) {
        const crd = pos.coords;
        console.log(`Your current position is:`);
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        const geocoder = new google.maps.Geocoder();

        const latlng = {
          lat: parseFloat(crd.latitude),
          lng: parseFloat(crd.longitude),
        };

        geocoder.geocode({ location: latlng }).then((response) => {
          if (response.results[0]) {
            console.log(response.results[4].formatted_address);
            console.log(response.results[6].formatted_address);

            let city = response.results[4].formatted_address.substring(0,response.results[4].formatted_address.lastIndexOf(','));
            let state = response.results[6].formatted_address.substring(0,response.results[6].formatted_address.lastIndexOf(','));
            sessionStorage.setItem('CITY', city);
            sessionStorage.setItem('STATE', state);
            
            window.location.href = "http://127.0.0.1:5000/chart";
          }
        });
      }

      function error(err) {
        console.warn("ERROR(${err.code}): ${err.message}");
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    }
    sendQueryReq({type: "state"})

  document.getElementById("location-selector").addEventListener("click", getLocation);
});
