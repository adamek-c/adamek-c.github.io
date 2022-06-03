const boxSkills = document.querySelectorAll(".skill__boxes__container");
const skills = document.querySelectorAll(".skill__boxes__list");
const skillInfoTech = document.querySelector(".skill__info__tech");
const skillTitle = document.querySelector(".skill__info__title");

// for mobile devices
boxSkills.forEach((box) => {
	box.addEventListener("click", () => {
		const boxId = box.getAttribute("data-set");
		skills.forEach((skill) => {
			const skillId = skill.getAttribute("data-number");
			if (boxId === skillId) {
				skill.classList.toggle("active");
			}
		});
	});
});

// for desktop devices
boxSkills.forEach((box) => {
	box.addEventListener("click", (e) => {
		const boxId = box.getAttribute("data-set");
		const boxText = box.lastElementChild.textContent;
		skillTitle.innerHTML = boxText;
		skills.forEach((skill) => {
			const skillId = skill.getAttribute("data-number");
			if (boxId === skillId) {
				const skillText = skill.innerHTML;
				skillInfoTech.innerHTML = skillText;
			}
		});
	});
});
