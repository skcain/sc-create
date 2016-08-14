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
