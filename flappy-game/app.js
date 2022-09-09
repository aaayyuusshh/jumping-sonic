/* change the position of the hole in the obstacle after every animation */
let obstacle = document.querySelector(".obstacle");
let hole = document.querySelector(".pass");
let object = document.querySelector(".object");

obstacle.addEventListener("animationiteration", () => {
    //generate a number between 150 & 500
    let random = -1 * randomNumberGenerator(500, 150);
    hole.style.top = random + 'px';
});

/**
 * random number (integer) generator between max & min (inclusive)
 * @param {Number} max 
 * @param {Number} min 
 * @returns {Number} 
 */
function randomNumberGenerator(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * simulate gravity - update the position of the ball every 10 milliseconds to simulate a "falling" affect
 * the setInterval() method calls a function at specified intervals
**/
setInterval(function() {
    // learnt that you cannot use .style to fetch a value, it's only to set which is why the below doesn't work
    // object.style.top = (object.style.top + 3) + "px";

    let objectTopProperty = window.getComputedStyle(object).getPropertyValue("top");
    object.style.top = (parseInt(objectTopProperty) + 3) + "px";

}, 10);
