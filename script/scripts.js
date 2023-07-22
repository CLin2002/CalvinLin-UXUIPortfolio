//
//
//
// main nav
//
//
//
function showDrop(){
	showSide();
  var getDropdown = document.getElementById("dropdown");
  //Will work to get to co-ordinate w/out interference from rest of JS bellow in this function
 if(getDropdown.style.display != "block")
   getDropdown.style.display = "block;"
	var getDropdownConts = document.getElementById("dropdown-conts");
	if(getDropdownConts.style.display != "block") getDropdownConts.style.display = "block";
	else getDropdownConts.style.display = "none";
}

function showSide(){
	var statSide = document.getElementById("sidenav");
	statSide.classList.toggle("sidenavClick");
	statSide = document.getElementById("logo");
	statSide.classList.toggle("sidemenuClick");
	statSide = document.getElementById("side-conts");
	statSide.classList.toggle("sidemenuClick");
}