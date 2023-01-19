$('.card-header').on("click", function() {
    $(this).find('span').toggleClass("fa-caret-up fa-caret-down");
    $('.card-header').removeClass("active");
    $(this).toggleClass("active");
  });