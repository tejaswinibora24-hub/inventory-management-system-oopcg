let products = [];

function addProduct() {

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let quantity = document.getElementById("productQuantity").value;

    if (name === "" || price === "" || quantity === "") {
        alert("Please fill all details!");
        return;
    }

    let product = {
        name: name,
        price: Number(price),
        quantity: Number(quantity)
    };

    products.push(product);

    displayProducts();

    alert("Product Added Successfully!");

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";
}


function displayProducts() {

    let table = document.getElementById("productList");

    table.innerHTML = "";

    products.forEach(function(product) {

        let row = table.insertRow();

        row.insertCell(0).textContent = product.name;
        row.insertCell(1).textContent = product.price;
        row.insertCell(2).textContent = product.quantity;

    });
}