$("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title margin-50");

$("button").text("delete");

$("button").html("<em>delete</em>");

$("a").attr("href", "https://www.bing.com///");

$("h1").click(function () {
    $("h1").css("color", "green");
})



$("input").keydown(function (event) {
    $("h1").text(event.key);
})

$("h1").on("mouseover", function () {
    $("h1").css("color", "blue");
})

$("h1").before("<button>before</button>");

$("h1").after("<button>after</button>");

$("h1").prepend("<button>prepend</button>");

$("h1").append("<button>append</button>");

// $("button").remove();

// $("button").click(function () {
//     $("h1").toggle();
// })

// $("button").click(function () {
//     $("h1").fadeToggle();
// })

// $("button").click(function () {
//     $("h1").slideToggle();
// })

// $("button").click(function () {
//     $("h1").animate({opacity: 0.5});
// })

$("button").click(function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})