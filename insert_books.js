use('plp_bookstore');

db.books.insertMany([
  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    genre: "Romance",
    basedOnRealLife: true,
    description: "A deeply personal story inspired by the author's own experiences...",
    yearPublished: 2016,
    ISBN: "9781501110368",
    price: 12.99,
    inStock: true
  },
  {
    title: "It Starts with Us",
    author: "Colleen Hoover",
    genre: "Romance",
    basedOnRealLife: false,
    description: "Sequel to 'It Ends with Us', following Lily and Atlas...",
    yearPublished: 2022,
    ISBN: "9781668001226",
    price: 14.99,
    inStock: true
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    genre: "Psychological Thriller",
    basedOnRealLife: false,
    description: "A twisted thriller involving a writer and dark secrets...",
    yearPublished: 2018,
    ISBN: "9781791392796",
    price: 13.50,
    inStock: true
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    genre: "Historical Fiction",
    basedOnRealLife: false,
    description: "A classic novel about the clash of cultures in colonial Nigeria...",
    yearPublished: 1958,
    ISBN: "9780385474542",
    price: 11.99,
    inStock: true
  },
  {
    title: "Think Big",
    author: "Ben Carson",
    genre: "Biography",
    basedOnRealLife: true,
    description: "The inspiring story of Dr. Ben Carson’s journey...",
    yearPublished: 1992,
    ISBN: "9780310214694",
    price: 10.99,
    inStock: true
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    basedOnRealLife: true,
    description: "An evidence-based guide to building good habits and breaking bad ones...",
    yearPublished: 2018,
    ISBN: "9780735211292",
    price: 16.00,
    inStock: true
  },
  {
    title: "Ndoto ya Amerika",
    author: "Kinyanjui Kombani",
    genre: "Contemporary Fiction",
    basedOnRealLife: true,
    description: "A story about the Kenyan dream versus the American dream...",
    yearPublished: 2019,
    ISBN: "9789966340651",
    price: 9.99,
    inStock: true
  }
]);