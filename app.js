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