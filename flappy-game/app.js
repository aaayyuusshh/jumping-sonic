/* change the position of the white hole in the obstacle after every animation */
var obstacle = document.querySelector(".obstacle");
var hole = document.querySelector(".pass");

obstacle.addEventListener("animationiteration", () => {
    //generate a number between 150 & 500
    var random = -1 * randomNumberGenerator(500, 150);
    hole.style.top = random + 'px';
});

/**
 * random number generator
 * @param {Number} max 
 * @param {Number} min 
 * @returns random (integer) number between max & min (both inclusive)
 */
function randomNumberGenerator(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}