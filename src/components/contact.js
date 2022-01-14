import Logo from '../assets/logo.png';

function createInfoDiv() {
    
    const image = document.createElement("img");
    image.src = Logo;
    image.alt = "The Coffee House Logo";

    const h2 = document.createElement("h2");
    h2.textContent = "THE COFFEE HOUSE";

    const p = document.createElement("p");
    p.innerHTML = "LOVE STREET, <br> LOS ANGELES, <br> CALIFORNIA";

    const div = document.createElement("div");
    div.classList.add("info");
    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(p);

    return div;

}

function createContact() {

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27396449406!2d-118.69191223222288!3d34.020161325224336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1642149340809!5m2!1sen!2sin";

    const div = document.createElement("div");
    div.classList.add("contact");
    div.appendChild(createInfoDiv());
    div.appendChild(iframe);

    return div;

}

export default createContact;