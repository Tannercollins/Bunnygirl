function computePrice() {
var caseprice = document.getElementById('casePrice').value;
var each = document.getElementById('Each').value;
var perEach = (caseprice / each);
var prePrice = (perEach / 0.6316);
var longPrice = Math.round(prePrice*10)/10-.01;
var Price = (longPrice).toFixed(2);


Price = Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById('Price1').innerHTML = "Price to charge per Each or Lbs = $"+Price;
};


function reset() {
     document.getElementById("casePrice").value = "";
     document.getElementById("Each").value = "";
     document.getElementById("Price1").value = "";
}
