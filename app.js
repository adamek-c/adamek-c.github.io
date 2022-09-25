tl = gsap.timeline();

tl.staggerFrom(
	".skill__text__hide",
	1.5,
	{ y: "100%", ease: Power4.easeOut },
	0.15
);
