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
