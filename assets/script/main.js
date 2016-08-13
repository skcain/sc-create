function revealProjects(val) {
    $(".project").hide();
    $("[data-job='" + val + "']").show();
}
