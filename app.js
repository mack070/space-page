// console.log('Hello World');
// prompt("Do you like space?");
// if("yes")alert("Great, then you've come to the right place");
// else("Oh well, hope to see you again!");

const button = document.querySelector("button");
button.addEventListener("click", function(){
    console.log("button click");
})

const counterButton = document.getElementById("counter-button");
let count = 0;
id= counterButton.addEventListener("click", function () {
console.log(count += 1)
});