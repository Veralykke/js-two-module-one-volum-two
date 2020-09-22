import { displayMessage, errorMessage } from "./components/displayMessage.js";
import { renderHTML } from "./components/createHtml.js";


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

    /* 
    DEBUGGING CODE: 
    console.log(searchInput);
    console.dir("---");
    console.dir(searchInput); */

    searchInput.onkeypress = function() {
        const filteredData = data.filter(
        function(product) {
            console.dir(searchInput.value);
            if(parseFloat(product.price) < parseFloat(searchInput.value)){
                return true;
            }
        });

        if(filteredData.length == 0){
            errorMessage("Oh my, somehting is wrong :D");
        } else {
            renderHTML(filteredData);
        }

        
    }
}


