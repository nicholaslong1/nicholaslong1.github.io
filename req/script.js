function navBar(){
  var ele = document.getElementById("links");
  if (ele.className == "links"){
    ele.className += " expanded";
  } else {
    ele.className = "links";
  }
}
