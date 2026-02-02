var filter = document.getElementById("filter");
var products = document.getElementsByClassName("product");
filter.onchange = function () {
    var selectedValue = filter.value;
    for (var i = 0; i < products.length; i++) {

        var productType = products[i].getAttribute("data-type");
        if (selectedValue == "all") {
            products[i].style.display = "block";
        }
        else if (productType == selectedValue) {
            products[i].style.display = "block";
        }
        else {
            products[i].style.display = "none";
        }
    }
};
