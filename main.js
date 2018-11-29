var click = 0; //Currency
var ACs = 0; //Autoclickers
var CPS = 0; //Clicks per Second
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
window.setInterval(function () {
    buttonClick(ACs);
}, 1000); //Actions per second

