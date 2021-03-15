var pics = ["mvs/returnoftheking.jpg",
    "mvs/patriot.jpg",
    "mvs/tpassion.jpg",
    "mvs/ironman.jpg",
    "mvs/gatsby.jpg",
    "mvs/braveheart.jpg",
    "mvs/blackpearl.jpg",
    "mvs/hugo.jpg",
    "mvs/darknight.jpg",
    "mvs/nineteen.jpg"];

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function () {
    if (counter === 10) {
        counter = 0
    }
    img.src = pics[counter]
    counter = counter + 1;
});