

//Invisible before needed
var secondShown = 0;
document.getElementById("dotty").style.opacity = secondShown;
document.getElementById("texty").style.opacity = secondShown;
document.getElementById("data1ID").style.opacity = secondShown;
document.getElementById("rect1ID").style.opacity = secondShown;
document.getElementById("popCount1").style.opacity = secondShown;


//Left Database Input
var cityName = 'CITY TEST';
var crimeData = [22, 1, 1, 1, 1, 1, 1, 1];
var totalPop = 30;
var totalCrime = 2;
var crimeRatio = totalCrime/totalPop;
var monthPrice = 12;
var foodPrice = 13;
var housePrice = 14;

//Right
var cityName1 = 'CITYTEST 1';
var crimeData1 = [2, 2, 2, 2, 2, 2, 2, 2];
var totalPop1 = 100;
var totalCrime1 = 2;
var crimeRatio1 = totalCrime1/totalPop1;
var monthPrice1 = 14;
var foodPrice1 = 16;
var housePrice1 = 17;



//Left input Data
var inData = {
        labels: ['Assault', 'Homicide', 'Kidnapping', 'Burgulary', 'Fraud', 'Identity Theft', 'Narcotics', 'Other'],
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
                'rgba(255, 198, 255, 1)',
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
                'rgba(255, 218, 255, 1)',
            ],
        }]
    };
    //Right
    var inData1 = {
        labels: ['Assault', 'Homicide', 'Kidnapping', 'Burgulary', 'Fraud', 'Identity Theft', 'Narcotics', 'Other'],
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
                'rgba(255, 198, 255, 1)',
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
                'rgba(255, 218, 255, 1)',
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
document.getElementById("food").textContent = 'Food price: ' + foodPrice;
document.getElementById("food1").textContent = 'Food price: ' + foodPrice1;
document.getElementById("house").textContent = 'House price: ' + housePrice;
document.getElementById("house1").textContent = 'House price: ' + housePrice1;


