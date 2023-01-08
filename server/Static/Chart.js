
var crimeData = [1, 1, 1, 1, 1, 1, 1, 1];
var totalPop = 107;
var totalCrime = 1;
var crimeRatio = totalCrime/totalPop;

var inData = {
        labels: ['Assault', 'Murder', 'Kidnapping', 'Burgulary', 'Fraud', 'Identity Theft', 'Narcotics', 'Other'],
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





var ctx = document.getElementById("doughChart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: inData,
  options: {
   	cutoutPercentage: 80,
    responsive: false,
  }
});



if(crimeRatio >= .09){
    document.getElementById("dotty").style.backgroundColor = "red";
    document.getElementById("texty").textContent= 'High Crime';
    document.getElementById("texty").style.marginLeft = "19.5vw";
    document.getElementById("texty").style.fontFamily = "monospace";

}

if(crimeRatio >= .056 && crimeRatio < .09){
    document.getElementById("dotty").style.backgroundColor = "yellow";
    document.getElementById("texty").textContent= 'Medium Crime';
    document.getElementById("texty").style.marginLeft = "18.68vw";
    document.getElementById("texty").style.fontFamily = "monospace";

}

if(crimeRatio < .056){
    document.getElementById("dotty").style.backgroundColor = "green";
    document.getElementById("texty").textContent= 'Low Crime';
    document.getElementById("texty").style.marginLeft = "19.6vw";
    document.getElementById("texty").style.fontFamily = "monospace";



}


document.getElementById("popCount").textContent= 'Population: ' + totalPop;


document.getElementById("plusButton").addEventListener('mouseover', (event) => {

    document.getElementById("plusButton").style.transform = 'rotate(' + 360 + 'deg)';

});

document.getElementById("plusButton").addEventListener('mouseleave', (event) => {

    document.getElementById("plusButton").style.transform = 'rotate(' + 0 + 'deg)';
    
});

document.getElementById("plusButton").addEventListener('click', (event) => {

    //link for another data struct
    
});
