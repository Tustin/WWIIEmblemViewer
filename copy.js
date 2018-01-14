//1. replace '##REPLACE##' with emblem data as a string
//2. go to https://my.callofduty.com/wwii/barracks/emblems
//3. open the console (ctrl + shift + J)
//4. paste in code below

$.getScript("//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js");
$.get("https://profile.callofduty.com/cod/csrf", function(data) {
    let uno = COD.api.sso.unoId();
    let cookie = $.cookie("XSRF-TOKEN");
    console.log(cookie);
    $.ajax({
        url: "https://profile.callofduty.com/cod/emblems/wwii/psn/uno/" + uno +"/?_csrf=" + cookie,
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: ##REPLACE##, //replace with raw emblem data
        statusCode: {
            200: function(data) {
                console.log(data);
            }
          },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    });
});