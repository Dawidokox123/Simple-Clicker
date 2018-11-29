var click = 0; //Currency
var ACs = 0; //Autoclickers
var CPS = 0; //Clicks per Second
var JSs = 0; //Java Scripts
function buttonClick(number) {
    click = click + number;
    document.getElementById("clicks").innerHTML = click;
} //Clicking func
function buyAC(numberAC) {
    var ACCost = Math.floor(10 * Math.pow(1.5, ACs));
    if (click >= ACCost) {
        ACs = ACs + 1;
        click = click - ACCost;
        CPS = CPS + 1;
        document.getElementById("ACs").innerHTML = ACs;
        document.getElementById("clicks").innerHTML = click;
        document.getElementById("CPS").innerHTML = CPS;
    }
    else {
        console.log("null")
    }
    var nextCostAC = Math.floor(10 * Math.pow(1.5, ACs));
    document.getElementById("ACCost").innerHTML = nextCostAC;
    console.log(ACs, click, ACCost);

} //Buying Autoclickers

function buyJS(numberJS) {
    var JSCost = Math.floor(10 * Math.pow(1.5, JSs));
    if (click >= JSCost) {
        JSs = JSs + 1;
        click = click - JSCost;
        CPS = CPS + 10;
        document.getElementById("JSs").innerHTML = JSs;
        document.getElementById("clicks").innerHTML = click;
        document.getElementById("CPS").innerHTML = CPS;
    }
    else {
        console.log("null")
    }
    var nextCostJS = Math.floor(10 * Math.pow(1.5, JSs));
    document.getElementById("JSCost").innerHTML = nextCostJS;
    console.log(JSs, click, JSCost);

} //Buying JavaScripts

window.setInterval(function () {
    buttonClick(CPS);
}, 1000); //Actions per second

