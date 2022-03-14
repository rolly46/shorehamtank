$(document).ready(function () {
    // Will need to pull from API up here first then do the according below

    // WATER TANK 3D
    $('.waterTankHere1').waterTank({
        width: 220,
        height: 180,
        color: '#8bd0ec',
        level: 83
    }).on('click', function (event) {
        $(this).waterTank(Math.floor(Math.random() * 100) + 0);
    });

    // CHARTS

    new Chart(document.getElementById("chart"), {
        type: 'line',
        data: {
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'World population per region (in millions)'
            }
        }
    });

    $('#triggerLive').on('click', function (e) {

        var lcard = document.getElementById("liveCard");
        var hcard = document.getElementById("historicalCard");
        lcard.style.display = "inline";
        hcard.style.display = "none";
   
   })

   $('#triggerHistorical').on('click', function (e) {

    var lcard = document.getElementById("liveCard");
    var hcard = document.getElementById("historicalCard");
    hcard.style.display = "inline";
    lcard.style.display = "none";
})


});