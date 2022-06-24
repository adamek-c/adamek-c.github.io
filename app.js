const hamburger = document.querySelector(".navbar__menu");
const navbarMobile = document.querySelector(".navbar__mobile");
const linkNavbar = document.querySelectorAll(".menu__link__mobile");

const navbar = document.querySelector(".navbar");

// const boxSkills = document.querySelectorAll(".skill__boxes__container");
// const skills = document.querySelectorAll(".skill__boxes__list");
// const skillInfoTech = document.querySelector(".skill__info__tech");
// const skillTitle = document.querySelector(".skill__info__title");

hamburger.addEventListener("click", () => {
	navbarMobile.classList.toggle("active-mobile");
});

linkNavbar.forEach((link) => {
	link.addEventListener("click", () =>
		navbarMobile.classList.toggle("active-mobile")
	);
});

// for mobile devices
// boxSkills.forEach((box) => {
// 	box.addEventListener("click", () => {
// 		const boxId = box.getAttribute("data-set");
// 		skills.forEach((skill) => {
// 			const skillId = skill.getAttribute("data-number");
// 			if (boxId === skillId) {
// 				skill.classList.toggle("active");
// 			}
// 		});
// 	});
// });

// for desktop devices
// boxSkills.forEach((box) => {
// 	box.addEventListener("click", () => {
// 		const boxId = box.getAttribute("data-set");
// 		const boxText = box.lastElementChild.textContent;
// 		skillTitle.innerHTML = boxText;
// 		skills.forEach((skill) => {
// 			const skillId = skill.getAttribute("data-number");
// 			if (boxId === skillId) {
// 				const skillText = skill.innerHTML;
// 				skillInfoTech.innerHTML = skillText;
// 			}
// 		});
// 	});
// });
