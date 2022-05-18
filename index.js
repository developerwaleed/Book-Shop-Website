const BookContainer = document.getElementById('booksection');
const HotBookContainer = document.getElementById('HotBooks');

let BookSection = '';
let objectsToShow = 2;

const BookSectionOBJ = [
    {
        image: './img/Buku 2 (1).png',
        alt: 'Book1',
        description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.'
    },
    {
        image: './img/Buku 3 (1).png',
        alt: 'Book2',
        description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
    },
    {
        image: './img/Buku 4 (1).png',
        alt: 'Book2',
        description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
    },
    {
        image: './img/Buku 5 (1).png',
        alt: 'Book2',
        description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
    },
    {
        image: './img/Buku 6.png',
        alt: 'Book2',
        description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
    },
];

const HotBookSection = [
    {
        image: './img/h1.png',
        alt: 'HotBook1',
        description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.'
    },
    {
        image: './img/h2.png',
        alt: 'HotBook2',
        description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
    },
    {
        image: './img/h3.png',
        alt: 'HotBook3',
        description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
    },
    {
        image: './img/h4.png',
        alt: 'HotBook4',
        description: 'Books are referred to as a mans best friend. They are very beneficial for mankind and have helped it evolve.',
    },
];

const ShowBooks = () => {
    for (let i = 0; i < BookSectionOBJ.length; i++) {
        BookSection += `
      <div class="book-holder">
      <div class="image-holder">
          <img src="${BookSectionOBJ[i].image}" alt="${BookSectionOBJ[i].alt}" width="100">
      </div>
      <div class="description whitecolor">
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
    for (let i = 0; i < HotBookSection.length; i++) {
        BookSection += `
        <div class="book-holder book-holder-color">
        <div class="image-holder">
            <img src="${HotBookSection[i].image}" alt="${HotBookSection[i].alt}" width="100">
        </div>
        <div class="description">
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


