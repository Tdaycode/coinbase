let sell = document.getElementById("clicksell");
let buy = document.getElementById("clickbuy");
let buysell = document.getElementById("sellbuy");

function showBuy() {
    buysell.style.display = "block"
    sell.style.visibility = "visible"
}

function closeBuy() {
    buysell.style.display = "none"
    sell.style.visibility = "hidden"
}






buy.addEventListener("click", function(e) {
    e.preventDefault
    showBuy();

});


sell.addEventListener("click", function(e) {
    e.preventDefault
    closeBuy();

});