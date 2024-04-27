let root = document.getElementById("root");


function handleSorting() {
    let sorting = document.getElementById("sorting").value;
    
    if(sorting.value === "desc") {
        sortDesc();
    }else if (selectedOption === "asc") {
        sortAsec();
    }
}

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


 async function sortDesc() {
    try {
        let res = await fetch("https://fakestoreapi.com/products?sort=price&order=desc");
        let data = await res.json();
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

async function sortAsec() {
    try {
        let res = await fetch("https://fakestoreapi.com/products?sort=price&order=desc");
        let data = await res.json();
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}