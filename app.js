gsap.registerPlugin(ScrollTrigger);

const hamburger = document.querySelector(".navbar__menu");
const navbarMobile = document.querySelector(".navbar__mobile");
const linkNavbar = document.querySelectorAll(".menu__link__mobile");
const navbar = document.querySelector("#navbar");

// open mobile navbar
hamburger.addEventListener("click", () => {
	navbarMobile.classList.toggle("active-mobile");
});

// hide menunavbar when you pick link only mobile devices
linkNavbar.forEach((link) => {
	link.addEventListener("click", () =>
		navbarMobile.classList.toggle("active-mobile")
	);
});

// hide navbar when is scroll add background when pageY equal 0 remove backgroundColor from navbar
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

//  All fancy stuff. In here will be used GSAP :)

gsap.from(".hero__info", {
	x: "50px",
	opacity: 0,
	delay: 0.5,
	ease: "power1.out",
	duration: 1,
});

gsap.from([".hero__men__desktop", ".hero__men__mobile"], {
	opacity: 0,
	ease: "power1.out",
	delay: 0.5,
	duration: 1,
});

gsap.from(".navbar", {
	y: "-10px",
	opacity: 0,
	ease: "power2.out",
	delay: 0.25,
	duration: 1,
});

// gsap.to(".about__picture", {
// 	duration: 0.75,
// 	y: "-10px",
// 	stagger: {
// 		each: 0.1,
// 		repeat: -1,
// 		yoyo: true,
// 	},
// });
