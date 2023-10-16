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

// const reveals = document.querySelectorAll(".container");  

// function reveal() {
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 0;
  
//       if (elementTop < windowHeight - elementVisible && i % 2 === 0) {
//         reveals[i].classList.add("opacity-change");
//       } 
//     }
//   }
  
//   window.addEventListener("scroll", reveal);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry) 
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			}
			// else {
			// 	entry.target.classList.remove("show");
			// }
	});
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

const observerLanding = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry) 
			if (entry.isIntersecting) {
				entry.target.classList.add("landing-show");
			}
			// else {
			// 	entry.target.classList.remove("show");
			// }
	});
});

const hiddenLanding = document.querySelectorAll(".landing-hide");
hiddenLanding.forEach((el) => observerLanding.observe(el));