function sortType(val) {
    $(".project").hide();
    if (val == "all") {
      $(".project").show();
    } else { $("[data-type='" + val + "']").show(); }
}
function sortJob(val) {
    $(".project").hide();
    if (val == "all") {
      $(".project").show();
    } else { $("[data-job='" + val + "']").show(); }
}
function menuToggle(e){
  var menuToggle = $("#js-centered-navigation-mobile-menu");
  $("#js-centered-navigation-menu").toggleClass("show");
}
$(window).on("load resize",function(e) {
  $("#js-centered-navigation-menu").removeClass("show");
});
