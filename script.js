function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let itemList = document.getElementById("cart");
    itemList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;
        li.style.textAlign='center';
        li.style.listStyle = 'none';

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.padding="9px";
        removeBtn.style.margin="9px";
        removeBtn.style.borderRadius="9px";
        removeBtn.style.backgroundColor="red";
        removeBtn.style.color="white"
        removeBtn.onclick = function () {
            removeItem(index);
        };

        li.appendChild(removeBtn);
        itemList.appendChild(li);
    });
}

function addItem() {
    let itemInput = document.getElementById("item");
    let item = itemInput.value.trim();

    if (item) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        itemInput.value = "";
        loadCart();
    }
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

window.onload = loadCart;