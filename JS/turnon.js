/*Legend:
    relay1
    relay2
    relay3
    relay4
    relay5
    relay6

*/

/*Turning Off Relay 1*/
document.getElementById('relay1-on').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field1=0"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning On Relay 1*/
document.getElementById('relay1-off').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field1=1"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning Off Relay 2*/
document.getElementById('relay2-on').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field2=0"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning On Relay 2*/
document.getElementById('relay2-off').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field2=1"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning Off Relay 3*/
document.getElementById('relay3-on').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field3=0"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning On Relay 3*/
document.getElementById('relay3-off').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field3=1"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning Off Relay 4*/
document.getElementById('relay4-on').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field4=0"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning On Relay 4*/
document.getElementById('relay4-off').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field4=1"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning Off Relay 5*/
document.getElementById('relay5-on').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field5=0"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning On Relay 5*/
document.getElementById('relay5-off').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field5=1"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning Off Relay 6*/
document.getElementById('relay6-on').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field6=0"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning On Relay 6*/
document.getElementById('relay6-off').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field6=1"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning Off Relay 7*/
document.getElementById('relay7-on').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field7=0"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

/*Turning On Relay 7*/
document.getElementById('relay7-off').addEventListener('click', function() {
    var url = "https://api.thingspeak.com/update?api_key=CTU5MR5NY2R41PAQ&field7=1"
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

