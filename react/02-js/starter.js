const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
/**
 * This function searches through the data array and returns the book object
 * that matches the provided id parameter.
 * It uses the JavaScript array find() method which returns the first element
 * that satisfies the provided testing function (in this case, matching IDs).
 * The arrow function (d) => d.id === id is a callback that checks if each item's id
 * property matches the id parameter passed to getBook.
 */
function getBook(id) {
    return data.find((d) => d.id === id);
}

// console.log(getBook(1));
// console.log(getBooks());

const book = getBook(2);
// const title = book.title;
// const author = book.author;

const {title, author, genres} = book;
console.log(title, author, genres); // The Cyberiad Stanislaw Lem
// { title: 'The Cyberiad', author: 'Stanislaw Lem', genres: [ 'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy' ] }

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // The rest operator ...otherGenres always needs to be in the end.
console.log(primaryGenre, secondaryGenre, otherGenres); // science fiction humor
// [ 'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy' ]

// The same  ... is also used for spread operator. Which is used to spread an array into individual elements.
const newGenres = [...genres, 'epic fantasy'];
console.log(newGenres); // science fiction humor epic fantasy
// [ 'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy', 'epic fantasy' ]

// The spread operator can also be used to spread an object into individual elements.
const newBook = {
    // Takes all the properties from the book object
    ...book,

    // Adding a new property to the object

    moviePublicationDate: '2023-01-01', 

    // Overriding an existing property
    pages: 499};


console.log(newBook);
// { id: 2, title: 'The Cyberiad', publicationDate: '1965-01-01', author: 'Stanislaw Lem', genres: [ 'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy' ], hasMovieAdaptation: false, pages: 295, translations: {}, reviews: { goodreads: { rating: 4.16, ratingsCount: 11663, reviewsCount: 812 }, librarything: { rating: 4.13, ratingsCount: 2434, reviewsCount: 0 } }, moviePublicationDate: '2023-01-01', pages: 499 }

// The spread operator can also be used to spread an object into individual elements.
const newAuthor = {...author, name: 'John Doe'};

console.log(newAuthor);
// { name: 'John Doe', author: 'Stanislaw Lem' }


