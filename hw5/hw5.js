function myfunction() {
    var schedule_guery_url = `https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=1&%24format=JSON`;

    //Fetch json data from MOTC Transport API V2 for instant metro schedule
    $.getJSON(schedule_guery_url, () => {
        console.log("API invoked.");
    }).done((data) => {
        function secToMin(sec) {
            let h = Math.floor(sec / 3600);
            let m = Math.floor(sec % 3600 / 60);
            let s = Math.floor(sec % 3600 % 60);

            return h+"Hour(s)"+m+"Min(s)"+s+"Sec(s)";
        }

        console.log("data receive sussessful.");
        console.log(data);

        $(".travel_time").text("--"+secToMin(data[0].TravelTimes[0].RunTime)+"->");

        for (let i=0; i<20; i++) {
            if (i != 19) {
                var travelTime = secToMin(data[0].TravelTimes[i+1].RunTime);
                var stationName = data[0].TravelTimes[i].ToStationName.Zh_tw;

                var newStation = `<h3 class="station">${stationName}</h3>`;
                var newTime = `<h3 class="travel_time">--${travelTime}-></h3>`;
                $(".jit_schedule").append(newStation);
                $(".jit_schedule").append(newTime);
            }
            else {
                stationName = data[0].TravelTimes[19].ToStationName.Zh_tw;
                var newStation = `<h3 class="station">${stationName}</h3>`;
                $(".jit_schedule").append(newStation);
            }
        }
    }).fail((msg) => {
        console.log(msg);
    }).always(() => {
        console.log("finished.");
    });
    this.blur();
}