
/* BEHOLDE*/
const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

const resultsContainer=document.querySelector(".results");

async function  getProducts() {

   const response = await fetch(url);

   const results = await response.json(); 

   const data = results.data;

   resultsContainer.innerHTML = "";
   
   for (let i= 0; i < data.length; i++) {

    if (i === 10) {
        break;
    }

    resultsContainer.innerHTML += `<div class="result">${data[i].name}</div>`;
    resultsContainer.innerHTML += `<div class="price">${data[i].price}</div>`;

   }
}

getProducts();
/* BEHOLDE*/