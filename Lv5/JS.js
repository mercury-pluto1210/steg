function clock()
{
    var now = new Date();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();

    if (Min < 10) Min = "0" + Min;
    if (Sec < 10) Sec = "0" + Sec;

    document.getElementById("clock_time").innerHTML = Hour + ":" + Min + ":" + Sec;   
}
setInterval(clock, 1000);