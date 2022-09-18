const images = [
    {"url": "./img/champion-kayle-aetherwing-splash.jpg"},
    {"url": "./img/champion-kayle-battleborn-morgana-exiled-splash.jpg"},
    {"url": "./img/champion-kayle-pentakill-splash.jpg"},
    {"url": "./img/champion-kayle-riot-splash.jpg"},
    {"url": "./img/champion-kayle-unmasked-silver-splash.jpg"},
    {"url": "./img/champion-kayle-viridian-splash.jpg"}
];

const containerItems = document.querySelector("#container-items");

function loadImages(images, container) {
    for (let image of images) {
        container.innerHTML += "<div class=\"item\"><img src=\""+image.url+"\" /></div>";
    }
}

loadImages(images, containerItems);
let items = document.querySelectorAll(".item");

document.querySelector("#previous").addEventListener("click", () => {
    const lastIndex = images.length - 1;
    containerItems.insertBefore(items[lastIndex], items[0]);
    items = document.querySelectorAll(".item");
});

document.querySelector("#next").addEventListener("click", () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
});