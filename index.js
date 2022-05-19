const BookContainer = document.getElementById('booksection');
const HotBookContainer = document.getElementById('HotBooks');
const mediaQuery = window.matchMedia('(min-width: 768px)');

let BookSection = '';

const BookSectionOBJ = [
  {
    title: 'The Genius Habit',
    image: './img/Buku 2 (1).png',
    alt: 'Book1',
    description: 'The Genius Habit is an amazing book it includes the most successful people habits',
  },
  {
    title: 'The BestSeller Code',
    image: './img/Buku 3 (1).png',
    alt: 'Book2',
    description: 'The BestSeller Code is an amazing book it includes the tips and tricks to sale yours goods Effecently',
  },
  {
    title: 'Becoming Best sellers',
    image: './img/Buku 4 (1).png',
    alt: 'Book2',
    description: 'Becoming Best sellers is an amazing book it helps you being a good seller.',
  },
  {
    title: 'The Sielent Patient!',
    image: './img/Buku 5 (1).png',
    alt: 'Book2',
    description: 'The Sielent Patient! book revolves around the mental health problems people face in daily life.',
  },
  {
    title: 'The Lord of Rings',
    image: './img/Buku 6.png',
    alt: 'Book2',
    description: 'The Lord of Rings Amazing fiction based book the fiction that used in the book keep the reader attached.',
  },
];

const HotBookSection = [
  {
    title: 'The Hobbits',
    image: './img/h1.png',
    alt: 'HotBook1',
    description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
  },
  {
    title: 'Harry Porter',
    image: './img/h2.png',
    alt: 'HotBook2',
    description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
  },
  {
    title: 'The Subtle Art',
    image: './img/h3.png',
    alt: 'HotBook3',
    description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
  },
  {
    title: 'Think like a monk',
    image: './img/h4.png',
    alt: 'HotBook4',
    description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
  },
  {
    title: 'The Hobbits',
    image: './img/h1.png',
    alt: 'HotBook1',
    description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
  },
  {
    title: 'The Subtle Art',
    image: './img/h3.png',
    alt: 'HotBook3',
    description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
  },

];

const ShowBooks = () => {
  for (let i = 0; i < BookSectionOBJ.length; i += 1) {
    BookSection += `
      <div class="book-holder">
      <div class="image-holder">
          <img src="${BookSectionOBJ[i].image}" alt="${BookSectionOBJ[i].alt}" width="100">
      </div>
      <div class="description whitecolor">
      <div class="booktitle primarycolor">${BookSectionOBJ[i].title}</div>
      ${BookSectionOBJ[i].description}
      </div>
  </div>
      `;
  }
  if (BookContainer !== null) {
    BookContainer.innerHTML = BookSection;
  }
};

ShowBooks();
BookSection = '';

const ShowHotBooks = () => {
  for (let i = 0; i < HotBookSection.length; i += 1) {
    BookSection += `
        <div class="Hotbook-holder book-holder-color">
        <div class="image-holder">
            <img src="${HotBookSection[i].image}" alt="${HotBookSection[i].alt}" width="100">
        </div>
        <div class="description">
        <div class="booktitle primarycolor">${HotBookSection[i].title}</div>
        ${HotBookSection[i].description}
        </div>
    </div>
        `;
  }
  if (HotBookContainer !== null) {
    HotBookContainer.innerHTML = BookSection;
  }
};

ShowHotBooks();

function toggle() {
  const containerSelector = HotBookContainer.getElementsByClassName('Hotbook-holder');
  const Btn = document.getElementById('togglebutton');

  for (let i = containerSelector.length - 1; i >= containerSelector.length - 4; i -= 1) {
    const Row = containerSelector[i];
    if (Row.style.display === 'none') {
      Row.style.display = 'grid';
      Btn.innerHTML = 'Less <img src="./img/arrow_up2.png">';
    } else {
      Row.style.display = 'none';
      Btn.innerHTML = 'MORE <img src="./img/arrow_down.png">';
    }
  }
}

if (!mediaQuery.matches) {
  toggle();
}
