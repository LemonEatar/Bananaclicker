var clicks = 50;
var cpc = 1;
      function add_Clicks() {
          clicks += cpc;
          document.getElementById("clicks").innerHTML = clicks;
      };
var cps = 0;
let priceU1 = 20
function oneUpgrade(){
    if (clicks >= priceU1){
    clicks -= priceU1
    cps += 1
    //TODO: debuf cpc to thought of amount
    cpc += 2
    priceU1 = Math.round(priceU1 + (priceU1 * 0.25))
    console.log(priceU1)
    console.log(cpc)
    document.getElementById("up1").innerHTML = priceU1;
    }
    document.getElementById("clicks").innerHTML = clicks;
}

function clicksps(){
    clicks += cps
    document.getElementById("clicks").innerHTML = clicks;
    setTimeout(clicksps, 1000)
}
clicksps()

