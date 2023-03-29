var clicks = 10000;
var cpc = 1;
function add_Clicks() {
  clicks += cpc;
  document.getElementById("clicks").innerHTML = clicks;
}
var cps = 0;
let priceU1 = 20;
function oneUpgrade() {
  if (clicks >= priceU1) {
    clicks -= priceU1;
    cps += 1;
    //TODO: debuf cpc to thought of amount
    cpc += 2;
    priceU1 = Math.round(priceU1 + priceU1 * 0.25);
    console.log(priceU1);
    console.log(cpc);
    document.getElementById("up1").innerHTML = priceU1;
  }
  document.getElementById("clicks").innerHTML = clicks;
}
let priceU2 = 1000;
function Upgrade2() {
  if (clicks >= priceU2) {
    clicks -= priceU2;
    cps += 10;
    //TODO: debuf cpc to thought of amount
    cpc += 2;
    priceU2 = Math.round(priceU2 + priceU2 * 0.25);
    console.log("Priceu2" + priceU2);
    document.getElementById("up2").innerHTML = priceU2;
  }
  document.getElementById("clicks").innerHTML = clicks;
}
let priceU3 = 10000;
function Upgrade3() {
  if (clicks >= priceU3) {
    clicks -= priceU3;
    cps += 100;
    //TODO: debuf cpc to thought of amount
    cpc += 200;
    priceU3 = Math.round(priceU3 + priceU3 * 0.25);
    console.log("Priceu3" + priceU3);
    document.getElementById("up3").innerHTML = priceU3;
  }
  document.getElementById("clicks").innerHTML = clicks;
}

function clicksps() {
  clicks += cps;
  document.getElementById("clicks").innerHTML = clicks;
  setTimeout(clicksps, 1000);
}
clicksps();
