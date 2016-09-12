function menuToggle(e){
  $("#js-centered-navigation-menu").toggleClass("show");
  $("#nav-open, #nav-close").toggle()
}
$(window).on("load resize",function(e) {
  $("#js-centered-navigation-menu").removeClass("show");
  $("#nav-close").hide();
});
