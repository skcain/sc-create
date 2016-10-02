var s;
function menuToggle(e){
  $("#js-centered-navigation-menu").toggleClass("show");
  $("#nav-open, #nav-close").toggle()
}
function dynamicHex() {
      s = Snap("#svg-bg");
  var hexGroup = s.select("#hex-group"),
      poly = s.select("#poly"),
      numPolys = ((window.innerWidth * 2) + 450) / 222.5;
  for (i = 0; i <= numPolys; i++) {
    hexGroup.prepend(poly.use().attr("fill", "#fff").transform("t-115, 70"));
  }
  return s;
}
$(window).on("load resize",function(e) {
  $("#js-centered-navigation-menu").removeClass("show");
  $("#nav-close").hide();
});
$( document ).ready(function() {
  if($("body#primary").length !== 0){
    dynamicHex();
    var polygons = s.selectAll("use"),
        xValPos = 110,
        xValNeg = -340,
        x2ValPos = -2.5,
        x2ValNeg = -227.5,
        polyValue = 0;
    for (y = 0; y < polygons.length; y++) {
      switch (polyValue){
        case 0:
          polygons[y].animate({ fill: "#c9d3d6", transform: "t" + xValPos + ", 70" }, 1000, mina.easeinout);
          xValPos += 225;
          polyValue++;
          break;
        case 1:
          polygons[y].animate({ fill: "#c9d3d6", transform: "t" + xValNeg + ", 70" }, 1000, mina.easeinout);
          xValNeg -= 225;
          polyValue++;
          break;
        case 2:
          polygons[y].animate({ fill: "#c9d3d6", transform: "t" + x2ValPos + ", -125" }, 1000, mina.easeinout);
          x2ValPos += 225;
          polyValue++;
          break;
        case 3:
          polygons[y].animate({ fill: "#c9d3d6", transform: "t" + x2ValNeg + ", -125" }, 1000, mina.easeinout);
          polyValue = 0;
          x2ValNeg -= 225;
          break;
      }
    }
    var social = Snap("#social-header"),
        linkedin = social.selectAll("#linkedin"),
        github = social.selectAll("#github"),
        instagram = social.selectAll("#instagram");
    $(linkedin).hover(function(){
      console.log("gi");
      $(this).select(path).attr("fill", "black");
    });
  }
});
