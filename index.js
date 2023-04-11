$("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title margin-50");

$("button").text("delete");

$("button").html("<em>delete</em>");

$("a").attr("href", "https://www.bing.com///");

$("h1").click(function () {
    $("h1").css("color", "green");
})

$("button").click(function () {
    $("h1").css("color", "pink");
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

$("button").remove();