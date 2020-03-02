

let lastClicked = "firstnav";
$(".navigation").click(function () {
    let current = $(this).attr("id");
    $(`#${current}`).toggleClass("selected");
    $(`#${lastClicked}`).toggleClass("selected");
    
    lastClicked = current;
})