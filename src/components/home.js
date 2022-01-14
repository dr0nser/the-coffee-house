function createFirstDiv() {

    const h2 = document.createElement("h2");
    h2.textContent = "Our Coffee";

    const p = document.createElement("p");
    p.innerHTML = "Since 1983, we have always been known for quality. We collect <br> the finest Arabica coffee beans and roast them with great care to provide you <br> with the best coffee. Taste the best coffee with The Coffee House.";
    
    const button = document.createElement("button");
    button.textContent = "LEARN MORE";

    const div = document.createElement("div");
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);
    
    const first = document.createElement("div");
    first.classList.add("first");
    first.appendChild(div);

    return first;
}

function createSecondDiv() {

    const h2 = document.createElement("h2");
    h2.textContent = "TASTE WARMTH IN EVERY SIP";

    const p = document.createElement("p");
    p.innerHTML = "Over the years we have mastered the art of creating froth so the cup looks fuller. <br> Every cup of our coffee contains warm water, sugar, milk and coffee unlike any other coffee <br> you have ever tasted. ";
    
    const button = document.createElement("button");
    button.textContent = "Browse Coffee>>";

    const div = document.createElement("div");
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);
    
    const second = document.createElement("div");
    second.classList.add("second");
    second.appendChild(div);

    return second;
}

function createHome() {

    const home = document.createElement("div");
    home.classList.add("home");

    const firstDiv = createFirstDiv();
    const secondDiv = createSecondDiv();

    home.appendChild(firstDiv);
    home.appendChild(secondDiv);

    return home;

}

export default createHome;