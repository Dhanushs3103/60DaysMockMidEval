let root = document.getElementById("root");
let sorting = document.getElementById("sorting");
let Categories = document.getElementById("categories");

// Adding eventListener to sorting
sorting.addEventListener("change" , handleSorting)

// Adding eventListener to categories
Categories.addEventListener('change',handleCategory);

// function to check the sorting option
function handleSorting() {
   let sortingOption = sorting.value;
    if(sortingOption === "desc") {
        sortDesc();
    }else if (sortingOption === "asc") {
        sortAsec();
    }
}

// function for categories selection
async function handleCategory () {
    let category = Categories.value;
    try {
        let res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        let data = await res.json();
        displayData(data)
    } catch (error) {
        console.log(error);
    }
}

// function to get getData
async function getData() {
    try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        displayData(data)
    } catch (error) {
        console.log(error);
    }
}

getData()

// function to displayData
function displayData(products){
    root.innerHTML="";
     products.forEach((product,i) => {
        // card 
        let card = document.createElement("div");
        card.className = "card";

        // image
        let cardImage = document.createElement("img");
        cardImage.src = product.image;

        // title  
        let cardTitle = document.createElement("h3");
        cardTitle.textContent = product.title;

        // category 
        let cardCategory = document.createElement("p");
        cardCategory.textContent = `Category: ${product.category}`;

        // Price
        let cardPrice = document.createElement("h3");
        cardPrice.textContent = `Price : $${product.price}`;

        // appending items to card
        card.append(cardImage,cardTitle,cardCategory,cardPrice);

        // appending to root
        root.append(card);
     });
}


// function to sort in dessending order
 async function sortDesc() {
    try {
        let res = await fetch("https://fakestoreapi.com/products?sort=desc");
        let data = await res.json();
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

// // function to sort in assending order
async function sortAsec() {
    try {
        let res = await fetch("https://fakestoreapi.com/products?sort=asc");
        let data = await res.json();
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}