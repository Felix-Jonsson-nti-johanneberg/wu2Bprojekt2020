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

$("#show-more-button").click(function () {
    let overflow = document.querySelector(".chapter-list");
    overflow.classList.toggle("show-overflow");

    let list = document.querySelector(".chapter-list");
    list.classList.toggle("list-height");

    let removefirstbutton = document.querySelector("#show-more-button");
    removefirstbutton.classList.toggle("remove-button1");

    let gone = document.querySelector("#show-less-button");
    gone.classList.toggle("remove-button2");   
})

$("#show-less-button").click(function () {
    let list = document.querySelector(".chapter-list");
    list.classList.toggle("show-overflow");

    let morelist = document.querySelector(".chapter-list");
    morelist.classList.toggle("list-height");

    let gone = document.querySelector("#show-less-button");
    gone.classList.toggle("remove-button1");

    let returnbutton = document.querySelector("#show-more-button");
    returnbutton.classList.toggle("remove-button1");
})

 


