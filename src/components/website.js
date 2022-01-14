import Logo from '../assets/logo.png';

import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

function top() {
    const div = document.createElement("div");
    div.classList.add("top");
    return div;
}

function footer() {

    const p = document.createElement("p");
    p.textContent = "Copyright @ Souvik Das 2022";

    const footer = document.createElement("footer");
    footer.appendChild(p);

    return footer;

}

function setActive(section_name) {
    const main = document.getElementById("main");
    main.innerHTML = '';
    if (section_name === "home") {
        main.appendChild(createHome());
        document.getElementById("btn_home").classList.add("active");
        document.getElementById("btn_menu").classList.remove("active");
        document.getElementById("btn_contact").classList.remove("active");
    } else if (section_name === "menu") {
        main.appendChild(createMenu());
        document.getElementById("btn_home").classList.remove("active");
        document.getElementById("btn_menu").classList.add("active");
        document.getElementById("btn_contact").classList.remove("active");
    } else if (section_name === "contact") {
        main.appendChild(createContact());
        document.getElementById("btn_home").classList.remove("active");
        document.getElementById("btn_menu").classList.remove("active");
        document.getElementById("btn_contact").classList.add("active");
    }
}

function header() {

    const image = document.createElement("img");
    image.src = Logo;
    image.alt = "The Coffee House Logo";

    const h1 = document.createElement("h1");
    h1.textContent = "THE COFFEE HOUSE";

    const btn_home = document.createElement("button");
    btn_home.textContent = "HOME";
    btn_home.setAttribute("id", "btn_home");
    btn_home.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActive("home");
    })

    const btn_menu = document.createElement("button");
    btn_menu.textContent = "MENU";
    btn_menu.setAttribute("id", "btn_menu");
    btn_menu.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActive("menu");
    })

    const btn_contact = document.createElement("button");
    btn_contact.textContent = "CONTACT";
    btn_contact.setAttribute("id", "btn_contact");
    btn_contact.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActive("contact");
    })

    const ul = document.createElement("ul");
    ul.appendChild(btn_home);
    ul.appendChild(btn_menu);
    ul.appendChild(btn_contact);

    const header = document.createElement("header");
    header.appendChild(image);
    header.appendChild(h1);
    header.appendChild(ul);

    return header;

}

function createWebsite() {

    const content = document.getElementById("content");

    const main = document.createElement("section");
    main.classList.add("main");
    main.setAttribute("id", "main");

    content.appendChild(top());
    content.appendChild(header());
    content.appendChild(main);
    content.appendChild(footer());

    setActive("home");

}

export default createWebsite;