function myfunction() {
    var query_origin = $("#origin :selected").val();
    var query_destination = $("#destination :selected").val();
    var info_query_url = `https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24filter=DestinationStationID%20eq%20'${query_destination}'%20and%20OriginStationID%20eq%20'${query_origin}'&%24top=420&%24format=JSON`;

    //Fetch json data from MOTC Transport API V2 for metro info
    $.getJSON(info_query_url, () => {
        alert("API invoked.");
    }).done((data) => {
        alert("data receive sussessful.");
        var result_price = "";
        var result_travelTime = "";

        result_price = data[0].Fares[1].Price;
        result_travelTime = data[0].TravelTime;
        $("#price").text(result_price);
        $("#time").text(result_travelTime);
    }).fail((msg) => {
        alert("data receive unsussessful.");
        console.log(msg);
    }).always(() => {
        alert("finished.");
    });
}