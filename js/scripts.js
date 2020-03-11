$("#menu, .fade-layer ").click(function () {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("showblock");
})

let lastClicked = "firstnav";
$(".navigation").click(function () {
    let current = $(this).attr("id");
    $(`#${current}`).toggleClass("selected");
    $(`#${lastClicked}`).toggleClass("selected");
    
    lastClicked = current;
})

$("#show-more").click(function () {
    let list = document.querySelector(".chapter-list");
    list.classList.toggle("show-all");
    let viewmore = document.querySelector("#show-more");
    viewmore.classList.toggle("remove-button");
})

$("#show-less").click(function () {
    let list = document.querySelector(".chapter-list");
    list.classList.toggle("show-all");
    let returnbutton = document.querySelector("#show-more");
    returnbutton.classList.toggle("remove-button");
})