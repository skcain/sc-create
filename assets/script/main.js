function revealProjects(val) {
    $(".project").hide();
    if (val == "all") {
      $(".project").show();
    } else { $("[data-job='" + val + "']").show(); }
}
