const hamburger = document.querySelector(".navbar__menu");
const navbarMobile = document.querySelector(".navbar__mobile");
const linkNavbar = document.querySelectorAll(".menu__link__mobile");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
	navbarMobile.classList.toggle("active-mobile");
});

linkNavbar.forEach((link) => {
	link.addEventListener("click", () =>
		navbarMobile.classList.toggle("active-mobile")
	);
});

document.addEventListener("scroll", () => {
	let currentScrollPos = window.pageYOffset;
	if (scroll > currentScrollPos && currentScrollPos !== 0) {
		navbar.style.top = "0";
		navbar.style.backgroundColor = "white";
	} else if (currentScrollPos === 0) {
		navbar.style.backgroundColor = "transparent";
	} else {
		navbar.style.top = "-150px";
		if (navbarMobile.classList.contains("active-mobile")) {
			navbarMobile.classList.remove("active-mobile");
		}
	}
	scroll = currentScrollPos;
});
