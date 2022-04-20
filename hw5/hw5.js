function myfunction() {
    var query_origin = $("#origin :selected").text();
    var query_destination = $("#destination :selected").text();
    var system_origin;
    var system_destination;

    var data = $.getJSON("https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=10&%24format=JSON", (data) => {
        alert("API invoked.");
    }).done((msg) => {
      alert("data receive sussessful.");
      console.log(msg);
      console.log(msg[0].DestinationStationID);
    }).fail((msg) => {
        alert("data receive unsussessful.");
        console.log(msg);
    }).always(() => {
        alert("finished.");
    });
}