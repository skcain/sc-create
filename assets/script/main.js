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
  $("#js-centered-navigation-menu").toggleClass("show");
  $("#nav-open, #nav-close").toggle()
}
$(window).on("load resize",function(e) {
  $("#js-centered-navigation-menu").removeClass("show");
  $("#nav-close").hide();
});
