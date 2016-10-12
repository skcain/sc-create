var s;
function menuToggle(e){
  if( e == "open"){

  }else if( e == "close" ){

  }
  $("#js-navigation-menu").toggleClass("show");
  $("#nav-open, #nav-close").toggle();
}
function dynamicHex(pageType) {
      s = Snap("#svg-bg");
  var hexGroup = s.select("#hex-group"),
      poly = s.select("#poly"),
      polyValue = 0;
      if(pageType == "primary"){
        var numPolys = ((window.innerWidth * 2) + 450) / 222.5;
        for (i = 0; i <= numPolys; i++) {
          hexGroup.prepend(poly.use().attr("fill", "#fff").transform("t-115, 70"));
        }
        var polygons = s.selectAll("use"),
            fillColor = "#c9d3d6",
            yFirst = 70,
            ySecond = -125,
            xValPos = 110,
            xValNeg = -340,
            x2ValPos = -2.5,
            x2ValNeg = -227.5,
            incrementValue = 225;
      }else if(pageType == "secondary"){
        var numPolys = ((window.innerWidth * 2) + 200) / 100;
        for (i = 0; i <= numPolys; i++) {
          hexGroup.prepend(poly.use().attr({
            "fill" : "#fff",
            "stroke" : "#c9d3d6",
            "stroke-width" : 2,
            "stroke-miterlimit" : 10
          }).transform("t-55, 110"));
        }
        var polygons = s.selectAll("use"),
            fillColor = "#fff",
            yFirst = 110,
            ySecond = 21,
            xValPos = 47,
            xValNeg = -157,
            x2ValPos = -3.5,
            x2ValNeg = -105,
            incrementValue = 102;
      }
      for (y = 0; y < polygons.length; y++) {
        switch (polyValue){
          case 0:
            polygons[y].animate({ fill: fillColor, transform: "t" + xValPos + ", " + yFirst}, 1000, mina.easeinout);
            xValPos += incrementValue;
            polyValue++;
            break;
          case 1:
            polygons[y].animate({ fill: fillColor, transform: "t" + xValNeg + ", " + yFirst}, 1000, mina.easeinout);
            xValNeg -= incrementValue;
            polyValue++;
            break;
          case 2:
            polygons[y].animate({ fill: fillColor, transform: "t" + x2ValPos + ", " + ySecond}, 1000, mina.easeinout);
            x2ValPos += incrementValue;
            polyValue++;
            break;
          case 3:
            polygons[y].animate({ fill: fillColor, transform: "t" + x2ValNeg + ", " + ySecond}, 1000, mina.easeinout);
            polyValue = 0;
            x2ValNeg -= incrementValue;
            break;
        }
      }
  return s;
}
/*$(window).on("load resize",function(e) {
  menuToggle("close");
});*/
$( document ).ready(function(e) {
  if ($("#svg-bg").length>0) {
    var pageType = $("body").attr("id");
    dynamicHex(pageType);
  }
});

$(window).on("load resize",function(e) {
  var menuToggle = $("#js-navigation-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    if($("#js-navigation-menu").is(":visible")){
      $("#js-navigation-mobile-menu").html("Open Menu");
    }else {
      $("#js-navigation-mobile-menu").html("Close Menu");
    }
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });
});
