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
  description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the   content: relea ",
  featuredImage: './desktop-resources/sn.png',
  technologies: ['HTML', 'CSS', 'Javascript'],
  liveVersionLink: '#',
  sourceLink: '#',
  tags: ['Canopy', 'Back-End Dev', 2015],
};

const project2 = {
  name: 'Multi-Post Stories',
  description:
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the   content: relea ",
  featuredImage: './desktop-resources/sn1.png',
  technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  liveVersionLink: '#',
  sourceLink: '#',
  tags: ['Facebook', 'Full Stack Dev', '2015'],
};
const project3 = {
  name: 'Facebook 360',
  description:
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the   content: relea ",
  featuredImage: './desktop-resources/sn2.png',
  technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  liveVersionLink: '#',
  sourceLink: '#',
  tags: ['Facebook', 'Full Stack Dev', '2015'],
};
const project4 = {
  name: 'Uber Navigation',
  description:
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the   content: relea ",
  featuredImage: './desktop-resources/sn3.png',
  technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  liveVersionLink: '#',
  sourceLink: '#',
  tags: ['Facebook', 'Full Stack Dev', '2015'],
};

const works = [project1, project2, project3, project4];

// Setting up the Works section:
// Helper functions
function createNode(type, nodeClass) {
  const node = document.createElement(type);
  if (nodeClass) node.className = nodeClass;
  return node;
}
// Create button
function createButton(content, location, className, id) {
  const button = createNode('button', className);
  button.innerHTML = content;
  button.sourceLink = '#';
  button.id = id;
  location.appendChild(button);
}

function showWork(referenceNode) {
  const portfolio = createNode('section', 'works');
  portfolio.id = 'portfolio';
  referenceNode.parentNode.insertBefore(portfolio, referenceNode);
  works.forEach((project) => {
    const cardDiv = createNode(
      'article',
      `card card-${works.indexOf(project)}`,
    );
    portfolio.appendChild(cardDiv);
    const cardImg = cardDiv.appendChild(createNode('img', 'project-image'));
    cardImg.src = project.featuredImage;
    const cardContent = cardDiv.appendChild(createNode('div', 'card-content'));
    const cardHeader = cardContent.appendChild(
      createNode('div', 'card-headers'),
    );
    const cardH2 = cardHeader.appendChild(createNode('h2'));
    cardH2.innerHTML = `<a href='#' class='project-title'>${project.name}</a>`;
    const cardCategories = cardHeader.appendChild(
      createNode('div', 'card-categories'),
    );
    const mainCategory = cardCategories.appendChild(
      createNode('a', 'main-category'),
    );
    mainCategory.innerHTML = `<a href='#' class='main-category'>${project.tags[0]}</a>`;
    const divider = cardCategories.appendChild(
      createNode('img', 'counter-card'),
    );
    divider.src = './resources/Counter.svg';
    divider.alt = 'counter';
    const secCategory = cardCategories.appendChild(
      createNode('a', 'sec-category'),
    );
    secCategory.innerHTML = `<a href='#' class='sec-category'>${project.tags[1]}</a>`;
    const divider2 = cardCategories.appendChild(
      createNode('img', 'counter-card'),
    );
    divider2.src = './resources/Counter.svg';
    divider2.alt = 'counter';
    const secCategory1 = cardCategories.appendChild(
      createNode('a', 'sec-category'),
    );
    secCategory1.innerHTML = `<a href='#' class='sec-category'>${project.tags[2]}</a>`;
    const cardText = cardContent.appendChild(createNode('p'));
    cardText.innerHTML = project.description;
    const hashtagCard = cardContent.appendChild(
      createNode('ul', 'hashtag-card'),
    );
    project.technologies.forEach((element) => {
      const argument = `<li><a href="#" class="hashtag">${element}</a></li>`;
      const currentTag = hashtagCard.appendChild(createNode('li', 'hashtag'));
      currentTag.innerHTML = argument;
    });
    createButton(
      'See Project',
      cardContent,
      'see-project',
      `btn-modal-${works.indexOf(project)}`,
    );
  });
}

// Create modal
function createModal(project, modalId) {
  const newModal = createNode('div', 'modal');
  newModal.id = `modal-${modalId}`;
  const modalContent = newModal.appendChild(
    createNode('div', 'modal-content animation effects'),
  );
  // Modal Header
  const modalHeader = modalContent.appendChild(
    createNode('div', 'modal-header'),
  );
  const modalHeaderLeft = modalHeader.appendChild(
    createNode('div', 'modal-header-left'),
  );
  const modalHeaderRight = modalHeader.appendChild(
    createNode('div', 'modal-header-right'),
  );
  const modalHeaderRightX = modalHeaderRight.appendChild(
    createNode('span', 'close'),
  );
  modalHeaderRightX.innerHTML = 'x';
  modalHeaderRightX.id = `modal-close-${modalId}`;
  const modalHeaderLeftTitle = modalHeaderLeft.appendChild(
    createNode('h2', 'modal-header-left-title'),
  );
  modalHeaderLeftTitle.innerHTML = project.name;
  const modalHeaderLeftCategories = modalHeaderLeft.appendChild(
    createNode('div', 'card-categories'),
  );
  const modalHeaderCategoryMain = modalHeaderLeftCategories.appendChild(
    createNode('a', 'main-category'),
  );
  const mainTag = project.tags[0];
  const secTag1 = project.tags[1];
  const secTag2 = project.tags[2];
  modalHeaderCategoryMain.innerHTML = mainTag;
  const modalHeaderDivider = modalHeaderLeftCategories.appendChild(
    createNode('img', 'counter-card'),
  );
  modalHeaderDivider.src = './resources/Counter.svg';
  modalHeaderDivider.alt = 'counter';
  const modalHeaderCategorySec = modalHeaderLeftCategories.appendChild(
    createNode('a', 'sec-category'),
  );
  modalHeaderCategorySec.innerHTML = secTag1;
  const modalHeaderDivider2 = modalHeaderLeftCategories.appendChild(
    createNode('img', 'counter-card'),
  );
  modalHeaderDivider2.src = './resources/Counter.svg';
  const modalHeaderCategorySec2 = modalHeaderLeftCategories.appendChild(
    createNode('a', 'sec-category'),
  );
  modalHeaderCategorySec2.innerHTML = secTag2;

  // Modal body
  const modalBody = modalContent.appendChild(createNode('div', 'modal-body'));
  const modalImage = modalBody.appendChild(
    createNode('img', 'project-image modal-image'),
  );
  modalImage.src = project.featuredImage;
  const modalText = modalBody.appendChild(createNode('div', 'modal-text'));
  const modalTextLeft = modalText.appendChild(
    createNode('p', 'modal-text-left'),
  );
  modalTextLeft.innerHTML = project.content;
  const modalTextRight = modalText.appendChild(
    createNode('div', 'modal-text-right'),
  );
  const modalHashtag = modalTextRight.appendChild(
    createNode('ul', 'hashtag-card hashtag-modal'),
  );
  project.technologies.forEach((element) => {
    modalHashtag.appendChild(
      createNode('li'),
    ).innerHTML = `<a href="#" class="hashtag">${element}</a>`;
  });
  modalTextRight.appendChild(createNode('hr', 'modal-divider'));
  const modalButtons = modalTextRight.appendChild(
    createNode('div', 'modal-buttons'),
  );
  const imageButton1Content = "See live <img class= 'image-button' src='./resources/seelive.svg'>";
  createButton(
    imageButton1Content,
    modalButtons,
    'see-project modal-button-inside',
  );
  const imageButton2 = createNode('a', 'modal-button-image');
  imageButton2.src = './resources/gitblue.svg';
  const imageButton2Content = "See Source <img class= 'image-button' src='./resources/gitblue.svg'>";
  createButton(
    imageButton2Content,
    modalButtons,
    'see-project modal-button-inside',
  );
  document.body.appendChild(newModal);
}

// Iterate modal creation

works.forEach((project) => {
  createModal(project, works.indexOf(project));
});

// Append section insertBefore, which inserts the node given as the first argument
//  before the node given as the second argument.
const aboutNode = document.getElementById('about');
showWork(aboutNode);
// aboutNode.parentNode.insertBefore(portfolioNode, aboutNode);

// Modal setup
const modal0 = document.getElementById('modal-0');
const modal1 = document.getElementById('modal-1');
const modal2 = document.getElementById('modal-2');
const modal3 = document.getElementById('modal-3');
// Fetch opening and closing
const btnModal0 = document.getElementById('btn-modal-0');
const btnModal1 = document.getElementById('btn-modal-1');
const btnModal2 = document.getElementById('btn-modal-2');
const btnModal3 = document.getElementById('btn-modal-3');
const btnClose0 = document.getElementById('modal-close-0');
const btnClose1 = document.getElementById('modal-close-1');
const btnClose2 = document.getElementById('modal-close-2');
const btnClose3 = document.getElementById('modal-close-3');
// Open and close Modal
function openModal0() {
  modal0.style.display = 'flex';
}
function openModal1() {
  modal1.style.display = 'flex';
}
function openModal2() {
  modal2.style.display = 'flex';
}
function openModal3() {
  modal3.style.display = 'flex';
}
function closeModal0() {
  modal0.style.display = 'none';
}
function closeModal1() {
  modal1.style.display = 'none';
}
function closeModal2() {
  modal2.style.display = 'none';
}
function closeModal3() {
  modal3.style.display = 'none';
}

btnClose0.onclick = closeModal0();
btnClose1.onclick = closeModal1();
btnClose2.onclick = closeModal2();
btnClose3.onclick = closeModal3();

// Event Listeners
btnModal0.addEventListener('click', () => {
  openModal0();
});
btnModal1.addEventListener('click', () => {
  openModal1();
});
btnModal2.addEventListener('click', () => {
  openModal2();
});
btnModal3.addEventListener('click', () => {
  openModal3();
});
btnClose0.addEventListener('click', () => {
  closeModal0();
});
btnClose1.addEventListener('click', () => {
  closeModal1();
});
btnClose2.addEventListener('click', () => {
  closeModal2();
});
btnClose3.addEventListener('click', () => {
  closeModal3();
});

document.addEventListener(
  'click',
  (event) => {
    // If user either clicks X button OR clicks outside
    //  the modal window, then close modal by calling closeModal()
    if (
      event.target === modal0
      || event.target === modal1
      || event.target === modal2
      || event.target === modal3
    ) {
      closeModal0();
      closeModal1();
      closeModal2();
      closeModal3();
    }
  },
  false,
);

// Create modal
