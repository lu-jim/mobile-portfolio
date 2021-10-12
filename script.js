/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

/* Close when someone clicks on the 'x' symbol inside the overlay */
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

// Fetch html elements
const closeBtn = document.getElementById('close-btn');
const hamMenu = document.getElementById('ham-button');

// This returns an HTML collection that needs to be browsed.
const hamItem = document.getElementsByClassName('menu-item');

// Event listeners
closeBtn.addEventListener('click', () => {
  closeNav();
});
hamMenu.addEventListener('click', () => {
  openNav();
});
// Iterating the hamItem HTMLCollection
for (let index = 0; index < hamItem.length; index += 1) {
  hamItem[index].addEventListener('click', () => {
    closeNav();
  });
}
// Project strucuture
const project1 = {
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: './desktop-resources/sn.png',
  technologies: ['HTML', 'CSS', 'Javascript'],
  liveVersionLink: '#',
  sourceLink: '#',
  tags: ['Canopy', 'Back-End Dev', 2015],
};

const project2 = {
  name: 'Multipost',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: './desktop-resources/sn.png',
  technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  liveVersionLink: '#',
  sourceLink: '#',
  tags: ['Facebook', 'Full Stack Dev, 2015'],
};
const project3 = {
  name: 'Facebook 360',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: './desktop-resources/sn.png',
  technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  liveVersionLink: '#',
  sourceLink: '#',
  tags: [''],
};
const project4 = {
  name: 'Uber Navigation',
  description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  featuredImage: './desktop-resources/sn1.png',
  technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  liveVersionLink: '#',
  sourceLink: '#',
  tags: [''],
};

const works = [project1, project2, project3, project4];
