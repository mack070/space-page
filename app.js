const planetButton = document.getElementById("planetButton");
const moonButton = document.getElementById("moonButton");
const sunButton = document.getElementById("sunButton");
const galaxyButton = document.getElementById("galaxyButton");
const upgradeButton = document.getElementById("upgradeButton");
const planetsSpan = document.getElementById("planetsSpan");
const ppsSpan = document.getElementById("ppsSpan");


planetButton.addEventListener("click", savePlanet);
moonButton.addEventListener("click", moonUpgrade);
sunButton.addEventListener("click", sunUpgrade);
galaxyButton.addEventListener("click", galaxyUpgrade);


function updatePage() {
planetsSpan.textContent = stats.planetsCount;
ppsSpan.textContent = stats.pps;
}

const stats = {
planetsCount: 0,
pps: 0, // Planets Per Second
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
stats.planetsCount = storageStats.planetsCount;
stats.pps = storageStats.pps;
updatePage();
}

function savePlanet() {
stats.planetsCount++;
updatePage();
updateStorage();
}

function moonUpgrade() {
stats.pps++;
stats.planetsCount -= stats.pps * 10;
updatePage();
updateStorage();
}

function sunUpgrade() {
stats.pps++;
stats.planetsCount -= stats.pps * 50;
updatePage();
updateStorage();
}

function galaxyUpgrade() {
stats.pps++;
stats.planetsCount -= stats.pps * 100;
updatePage();
updateStorage();
}

setInterval(function(){
stats.planetsCount += stats.pps;
updatePage();
updateStorage();
}, 1000);

function updateStorage( ){
localStorage.setItem("stats", JSON.stringify(stats))
}


// Space Gallery JavaScript Code
const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

let imageIndex = 0; // this currently does nothing, but is a start

const images = [
{
url: "https://unsplash.com/photos/purple-and-black-galaxy-illustration-uXchDIKs4qI",
alt: "A beautiful purple and black galaxy",
title: "Purple Galaxy"
},

{
url: "https://unsplash.com/photos/blue-and-black-galaxy-digital-wallpaper-qtRF_RxCAo0",
alt: "Rainbow Galaxy",
},

{
url: " ",
alt: "space-3",
},

{
url: " ",
alt: "Space-4",
},

{
url: " ",
alt: "space-5",
},

{
url: " ",
alt: "space-6",
},

{
url: " ",
alt: "Space-7",
},

{
url: " ",
alt: "space-8",
},

{
url: " ",
alt: "space-9",
},

{
url: " ",
alt: "space-10",
},
];

function createThumbnails() {
images.forEach(function (image) {
const img = document.createElement("img");

img.src = image.url;
img.alt = image.alt;

thumbContainer.appendChild(img);

img.addEventListener("click", function () {
createBigImage(image);
});
});
}


function createBigImage(image) {
displayImage.innerHTML = "";

const bigImg = document.createElement("img");

bigImg.src = image.url;
bigImg.alt = image.alt;

displayImage.appendChild(bigImg);
}

createThumbnails();
createBigImage(images[0]);