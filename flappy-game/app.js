/* change the position of the white hole in the obstacle after every animation */
var obstacle = document.querySelector(".obstacle");
var hole = document.querySelector(".pass");

obstacle.addEventListener("animationiteration", () => {
    //generate rand num between 150 & 500
    var random = -1 *  (Math.floor(Math.random() * (500 - 150 + 1)) + 150);
    hole.style.top = random + 'px';
});