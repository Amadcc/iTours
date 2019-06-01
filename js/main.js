const btnOpenNav = document.querySelector(".js--open-nav");
const btnCloseNav = document.querySelector(".js--close-nav");
const navbar = document.querySelector(".js--navbar");

btnOpenNav.addEventListener("click", () => {
  navbar.classList.add("navbar--is-visible");
});

btnCloseNav.addEventListener("click", () => {
  navbar.classList.remove("navbar--is-visible");
});

$(function() {
  var selectedClass = "";
  $(".fil-cat").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("scale-anm");
    setTimeout(function() {
      $("." + selectedClass)
        .fadeIn()
        .addClass("scale-anm");
      $("#portfolio").fadeTo(300, 1);
    }, 300);
  });
});
