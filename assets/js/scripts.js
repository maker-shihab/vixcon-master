$(document).ready(function () {
  // Dropdpwn Menu
  $(".hamburger").click(function () {
    $(".header__nav").fadeToggle(400);
    return false;
  });
});
var mixer = mixitup(".schedule__tab-item");
mixer.filter(".mxt-1").then(function (state) {
  console.log(state.activeFilter.selector);
});
