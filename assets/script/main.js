function menuToggle(e){
  $("#js-centered-navigation-menu").toggleClass("show");
  $("#nav-open, #nav-close").toggle()
}
function dynamicHex() {
  var  w = (window.innerWidth / 2) + 112.5;
  var widthIncrease = 225;
  var  svgns = "http://www.w3.org/2000/svg";
  var  xlinkns = "http://www.w3.org/1999/xlink";
  var  g = document.getElementById("hex-group");
  for (i = 225; i < w; i += 225) {
    var  useR = document.createElementNS(svgns, "use");
    useR.setAttributeNS(xlinkns, "href", "#polygon");
    useR.setAttribute("class", "polygon");
    useR.setAttribute("x", i);
    g.appendChild(useR);
    var  useL = document.createElementNS(svgns, "use");
    useL.setAttributeNS(xlinkns, "href", "#polygon");
    useL.setAttribute("class", "polygon");
    useL.setAttribute("x", '-' + i);
    g.appendChild(useL);
    var  useTopR = document.createElementNS(svgns, "use");
    useTopR.setAttributeNS(xlinkns, "href", "#polygon");
    useTopR.setAttribute("class", "polygon");
    useTopR.setAttribute("x", i - 112.5);
    useTopR.setAttribute("y", "-195");
    g.appendChild(useTopR);
    var  useTopL = document.createElementNS(svgns, "use");
    useTopL.setAttributeNS(xlinkns, "href", "#polygon");
    useTopL.setAttribute("class", "polygon");
    useTopL.setAttribute("x", '-' + (i - 112.5));
    useTopL.setAttribute("y", "-195");
    g.appendChild(useTopL);
  }
}
$(window).on("load resize",function(e) {
  $("#js-centered-navigation-menu").removeClass("show");
  $("#nav-close").hide();
  dynamicHex();
});
