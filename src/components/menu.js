
function createItemCard(image_name, item_name) {

    const image = document.createElement("img");
    image.src = `../src/assets/${image_name}.jpg`;
    image.alt = item_name;

    const h2 = document.createElement("h2");
    h2.textContent = item_name;

    const button = document.createElement("button");
    button.textContent = "ORDER NOW";

    const div = document.createElement("div");
    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(button);
    div.classList.add("card");

    return div;

}

function createMenu() {
    
    const grid = document.createElement("div");
    grid.classList.add("grid");

    grid.appendChild(createItemCard("espresso", "Espresso"));
    grid.appendChild(createItemCard("latte", "Coffee Latte"));
    grid.appendChild(createItemCard("cappuchino", "Cappuchino"));
    grid.appendChild(createItemCard("black-coffee", "Black Coffee"));
    grid.appendChild(createItemCard("iced-coffee", "Iced Coffee"));
    grid.appendChild(createItemCard("frappuchino", "Frappuchino"));

    return grid;

}

export default createMenu;