
window.addEventListener("load", () => {
    data = {
        type: "data",
        county: sessionStorage.getItem('CITY'),
        state: sessionStorage.getItem('STATE')
    }

    console.log(sessionStorage.getItem('CITY'),
    sessionStorage.getItem('STATE'))

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
        
    //Invisible before needed
    //document.getElementById("dotty").style.opacity = 0;
    //document.getElementById("texty").style.opacity = 0;
    //document.getElementById("data1ID").style.opacity = 0;
    //document.getElementById("rect1ID").style.opacity = 0;
    //document.getElementById("popCount1").style.opacity = 0;


    //Left Database Input
    var cityName = sessionStorage.getItem('CITY') + ", " + sessionStorage.getItem('STATE');
    var crimeData = [response[5], response[6], response[7], response[8], response[9], response[10], response[11]];
    var totalPop = response[1];
    var totalCrime = response[12];
    var crimeRatio = response[13];
    var monthPrice = response[3];
    var housePrice = response[2];

    //Right
    var cityName1 = 'National Average';
    var crimeData1 = [551557, , 920, 712, 70716, 61231, 95124];
    var totalPop1 = 331900000;
    var totalCrime1 = 817020;
    var crimeRatio1 = totalCrime1/totalPop1;
    var monthPrice1 = 1295;
    var housePrice1 = 348079;



    //Left input Data
    var inData = {
            labels: ['Assault', 'Homicide', 'Kidnapping', 'Burgulary', 'Fraud', 'Identity Theft', 'Narcotics'],
            datasets:[{
                label: 'Crime Data',
                data: crimeData,
                backgroundColor: [
                    'rgba(255, 173, 173, 1)',
                    'rgba(255, 214, 165, 1)',
                    'rgba(253, 255, 182, 1)',
                    'rgba(202, 255, 191, 1)',
                    'rgba(155, 246, 255, 1)',
                    'rgba(160, 196, 255, 1)',
                    'rgba(189, 178, 255, 1)',
                ],
                borderColor: '#000000',
                borderwidth: 1,
                hoverBackgroundColor: [
                    'rgba(255, 193, 193, 1)',
                    'rgba(255, 224, 185, 1)',
                    'rgba(253, 255, 202, 1)',
                    'rgba(222, 255, 211, 1)',
                    'rgba(175, 255, 255, 1)',
                    'rgba(180, 216, 255, 1)',
                    'rgba(209, 198, 255, 1)',
                ],
            }]
        };
        //Right
        var inData1 = {
            labels: ['Assault', 'Homicide', 'Kidnapping', 'Burgulary', 'Fraud', 'Identity Theft', 'Narcotics'],
            datasets:[{
                label: 'Crime Data',
                data: crimeData1,
                backgroundColor: [
                    'rgba(255, 173, 173, 1)',
                    'rgba(255, 214, 165, 1)',
                    'rgba(253, 255, 182, 1)',
                    'rgba(202, 255, 191, 1)',
                    'rgba(155, 246, 255, 1)',
                    'rgba(160, 196, 255, 1)',
                    'rgba(189, 178, 255, 1)',
                ],
                borderColor: '#000000',
                borderwidth: 1,
                hoverBackgroundColor: [
                    'rgba(255, 193, 193, 1)',
                    'rgba(255, 224, 185, 1)',
                    'rgba(253, 255, 202, 1)',
                    'rgba(222, 255, 211, 1)',
                    'rgba(175, 255, 255, 1)',
                    'rgba(180, 216, 255, 1)',
                    'rgba(209, 198, 255, 1)',
                ],
            }]
        };




    //Left
    var ctx = document.getElementById("doughChart");
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: inData,
    options: {
        cutoutPercentage: 80,
        responsive: false,
    }
    });

    //Right
    var ctx1 = document.getElementById("doughChart1");
    var myChart = new Chart(ctx1, {
    type: 'doughnut',
    data: inData1,
    options: {
        cutoutPercentage: 80,
        responsive: false,
    }
    });

    //Right highCrime
    if(crimeRatio1 >= .09){
        document.getElementById("dotty").style.backgroundColor = "red";
        document.getElementById("dotty").style.marginLeft = "66vw";

        document.getElementById("texty").textContent= 'High Crime';
        document.getElementById("texty").style.marginLeft = "70vw";
        document.getElementById("texty").style.fontFamily = "monospace";

    }

    //Right medcrime
    if(crimeRatio1 >= .056 && crimeRatio1 < .09){
        document.getElementById("dotty").style.backgroundColor = "yellow";
        document.getElementById("dotty").style.marginLeft = "66vw";

        document.getElementById("texty").textContent= 'Medium Crime';
        document.getElementById("texty").style.marginLeft = "69.8vw";
        document.getElementById("texty").style.fontFamily = "monospace";

    }
    //Right lowcrime
    if(crimeRatio1 < .056){
        document.getElementById("dotty").style.backgroundColor = "green";
        document.getElementById("dotty").style.marginLeft = "66vw";

        document.getElementById("texty").textContent= 'Low Crime';
        document.getElementById("texty").style.marginLeft = "70vw";
        document.getElementById("texty").style.fontFamily = "monospace";



    }

    //left highcrime
    if(crimeRatio >= .09){
        document.getElementById("dotty1").style.backgroundColor = "red";

        document.getElementById("texty1").textContent= 'High Crime';
        document.getElementById("texty1").style.marginLeft = "19.5vw";
        document.getElementById("texty1").style.fontFamily = "monospace";

    }

    //left medcrime
    if(crimeRatio >= .056 && crimeRatio < .09){
        document.getElementById("dotty1").style.backgroundColor = "yellow";

        document.getElementById("texty1").textContent= 'Medium Crime';
        document.getElementById("texty1").style.marginLeft = "18.48vw";
        document.getElementById("texty1").style.fontFamily = "monospace";

    }

    //leftlowcrime
    if(crimeRatio < .056){
        document.getElementById("dotty1").style.backgroundColor = "green";

        document.getElementById("texty1").textContent= 'Low Crime';
        document.getElementById("texty1").style.marginLeft = "19.6vw";
        document.getElementById("texty1").style.fontFamily = "monospace";



    }

    //left population count
    document.getElementById("popCount").textContent= 'Population: ' + totalPop;
    document.getElementById("popCount").style.marginLeft = "18.5vw";
    //right population count
    document.getElementById("popCount1").textContent= 'Population: ' + totalPop1;
    document.getElementById("popCount1").style.marginLeft = "68.5vw";


    //add-button hover turn
    document.getElementById("plusButton").addEventListener('mouseover', (event) => {

        document.getElementById("plusButton").style.transform = 'rotate(' + 360 + 'deg)';

    });

    //add-button hover revert
    document.getElementById("plusButton").addEventListener('mouseleave', (event) => {

        document.getElementById("plusButton").style.transform = 'rotate(' + 0 + 'deg)';
        
    });

    //add-button click action
    document.getElementById("plusButton").addEventListener('click', (event) => {

        //gotten realistic
        
        
    });

    //LRLR stats
    document.getElementById("CityID").textContent = cityName;
    document.getElementById("CityID1").textContent = cityName1;
    document.getElementById("month").textContent = 'Rent per month: ' + monthPrice;
    document.getElementById("month1").textContent = 'Rent per month: ' + monthPrice1;
    document.getElementById("house").textContent = 'House price: ' + housePrice;
    document.getElementById("house1").textContent = 'House price: ' + housePrice1;
}})
})

