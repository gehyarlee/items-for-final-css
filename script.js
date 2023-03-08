const navMenu = document.querySelector('#hamburger');
const navItems = document.querySelector('.nav');
const backdrop = document.querySelector('.backdrop');
const allSections = document.querySelectorAll('section');

navMenu.addEventListener('click', function (e) {
	e.preventDefault();
	navMenu.classList.toggle('fa-burger');
	navMenu.classList.toggle('fa-xmark');
	navItems.classList.toggle('appear');
	backdrop.classList.toggle('appear');
});

backdrop.addEventListener('click', function (e) {
	e.preventDefault();
	navMenu.classList.toggle('fa-burger');
	navMenu.classList.toggle('fa-xmark');
	navItems.classList.toggle('appear');
	backdrop.classList.toggle('appear');
});
const revealSection=function(entries, observer) {
	const [entry]=entries;
	if(!entry.isIntersecting)return;
	entry.target.classList.remove('section--hidden');
	observer.unobserve(entry.target);
	};
	const sectionObserver=new IntersectionObserver(revealSection,{
		root: null,
		threshold: 0.15,
	  })
	  allSections.forEach(function(section){
		sectionObserver.observe(section);
		section.classList.add('section--hidden')
	  })
