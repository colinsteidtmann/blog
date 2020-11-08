/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
function displayDropdown(dropdownButton) {
	dropdownButton.classList.toggle("active");
	var dropdownContent = dropdownButton.nextElementSibling;
	var downArrow = dropdownButton.children[0];
	var upArrow = dropdownButton.children[1];
	if (dropdownContent.style.display === "block") {
		console.log("1");
		dropdownContent.style.display = "none";
		downArrow.style.display = "inline";
		upArrow.style.display = "none";
	} else {
		console.log("2");
		dropdownContent.style.display = "block";
		downArrow.style.display = "none";
		upArrow.style.display = "inline";
	}
}

function openSidebar(sidebar, navigationContentTitle, navigationContentLinks){
	sidebar.classList.toggle("responsive");
	navigationContentTitle.classList.toggle("responsive");

	var i;
	for (i = 0; i < navigationContentLinks.length; i++) {
		navigationContentLinks[i].classList.toggle("responsive");
	}
}