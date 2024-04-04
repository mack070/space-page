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



const thumbImage = document.getElementById("thumb-image");
const displayImage = document.getElementById("display");

let imageIndex = 0; // this currently does nothing, but is a start

const images = [
  {
    url: "https://images.unsplash.com/photo-1590346320751-876ff414c050?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Space-1",
  },

  {
    url: "https://images.unsplash.com/photo-1616529927764-173a543493ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "space-2",
  },

  {
    url: "https://images.unsplash.com/photo-1624806992221-12d8062c35e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "space-3",
  },
];

function createThumbnails() {
  images.forEach(function (image) {
    const img = document.createElement("img");

    img.src = image.url;
    img.alt = image.alt;

    thumbImage.appendChild(img);

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