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

// the clue for using arrow keys or left and right buttons
let imageIndex = 0; // this currently does nothing, but is a start

const images = [
{
url: "https://images.unsplash.com/photo-1608178398319-48f814d0750c?q=80&w=2406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Purple Galaxy",
},

{
url: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Rainbow Galaxy",
},

{
url: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Whirlpool Galaxy",
},

{
url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2711&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Awesome Space",
},

{
url: "https://images.unsplash.com/photo-1615378536579-61c7d173e8a9?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Red Space",
},

{
url: "https://images.unsplash.com/photo-1611716524065-622312678d68?q=80&w=2611&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Outer Space",
},

{
url: "https://images.unsplash.com/photo-1543719621-92ebcae62483?q=80&w=2684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt: "Blue Universe",
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