function navBar(){
  var ele = document.getElementById("nav");
  if (ele.className == "nav"){
    ele.className += " collapsed";
  } else {
    ele.className = "nav";
  }
}
