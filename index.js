$(document).ready(function () {
  const heading = document.querySelector(".heading");
  const addButton = document.querySelector(".button");
  const list = document.querySelector(".lista");

  $(addButton).click(function () {
    $(heading)
      .animate(
        {
          fontSize: 100,
        },
        1000
      )
      // .css("color", "red")
      .animate(
        {
          fontSize: 40,
        },
        500
      );
  });

  $(addButton).click(function () {
    $(heading).each(function () {
      $(this).toggleClass("naslov");
    });
  });

  $(addButton).click(function () {
    let x = document.querySelector(".text-area").value;
    $(list).append("<p>" + x + "</p>");
  });

  // $(".text-area").val("");
  // $(".text-area").on("focus", function () {
  //   $(".text-area").val("");
  // });
  $(addButton).on("click", function (empty) {
    $(".text-area").val("");
  });

  $(".text-area").keypress(function (e) {
    if (e.which == 13) {
      let x = document.querySelector(".text-area").value;
      $(list).append("<p>" + x + "</p>");
    }
    if (e.which == 13) {
      $(".text-area").val("");
    }
  });
});
