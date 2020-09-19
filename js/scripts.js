const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";
getProducts();

async function getProducts() {
    const response = await fetch(url);
    const results = await response.json();

    renderHTML(results.data); 
    filterData(results.data); 
}

function filterData(data) {
    const searchInput = document.querySelector("#searchInput");

    console.log(searchInput);
    console.dir("---");
    console.dir(searchInput);
    searchInput.onkeypress = function() {

        const filteredData = data.filter(
        function(product) {

            console.dir(searchInput.value);
        if(parseFloat(product.price) < parseFloat(searchInput.value)){
            return true;
        }
    });
    renderHTML(filteredData);
  }
}

function renderHTML(data) {
    const results = document.querySelector(".results");
    results.innerHTML = "";

    data.forEach(product => {
        results.innerHTML += `
        <div class="product">
        <div class="name">${product.name}</div>
        <div class="price">${product.price}</div>
        </div>`;
    });
}


/*

const resultsContainer=document.querySelector(".results");

const search = document.querySelector("#searchInput");

function renderPrice() {
    const priceContainer = document.querySelector(".price");

    priceContainer.innerHTML = "";
    renderPrice.forEach(function (data) {
        priceContainer.innerHTML += `<div>${data.price}</div>`;
    });
renderPrice;

search.onkeyup = function() {
    console.log("hi");

    let filteredNumbers = numbers.filter();

    function filterNumbers(number) {
        if(number > 50) {
            return true;
        }
    }
    console.log(numbers);
    console.log(filteredNumbers);
};


async function getProducts() {

   const response = await fetch(url);
   const results = await response.json(); 
   const data = results.data;


   let prices = new Array();

   resultsContainer.innerHTML = "";
   
   for (let i= 0; i < data.length; i++) {
    prices.push(data[i].price);

    if (i === 10) {
        break;
    }
    resultsContainer.innerHTML += `<div class="result">${data[i].name}</div>`;
    resultsContainer.innerHTML += `<div class="price">${data[i].price}</div>`;
   }
   console.log(prices);
}

getProducts();*/