// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// $("button").click(function() {
//     $("h1").css("color", "purple");
// });

$("input").keydown(function(event) {
    console.log(event.key);
});

$(document).keydown(function(event) {
    $("h1").text(event.key)
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "green")
})

$("button").click(function() {
    //$("h1").fadeOut();
    $("h1").fadeToggle();
});
