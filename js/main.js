function computePrice() {
var caseprice = document.getElementById('casePrice').value;
var each = document.getElementById('Each').value;
var perEach = (caseprice / each);
var Price = (perEach * 0.6316).toFixed(2);
Price = Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById('Price1').innerHTML = "Price to charge per Each or Lbs = $"+Price;

};

function dodobird() {
  document.getElementById('Price1').innerHTML = "Price to charge per Each or Lbs = $";
};
