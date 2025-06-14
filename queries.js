use('plp_bookstore');
/*Basic Queries*/
// Finding all books in a specific genre
db.books.find({ genre: "Romance"});

// Find books published after a certain year
db.books.find({ yearPublished: { $gt: 2010 } });

// Find books by a specific author
db.books.find({ author: "Colleen Hoover" });

// Update the price of a specific book
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { price: 18.00 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "Verity" });

/*Advanced queries*/

// 1.Find books that are both in stock and published after 2010
db.books.find({ 
    inStock: true, 
    yearPublished: { $gt: 2010 }
 });

// 2.Projection - only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 3.Sort books by price ascending
db.books.find().sort({ price: 1 });

// 4.Sort books by price descending
db.books.find().sort({ price: -1 });

// 5.Pagination: page 1 (first 5 books)
db.books.find().skip(0).limit(5);

// 6.Pagination: page 2 (next 5 books)
db.books.find().skip(5).limit(5);


/*Agrregation pipelines*/

// 1.Aggregation: average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

//2. Aggregation: author with most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 3.Aggregation: group by publication decade
db.books.aggregate([
    {
    $group:{
        _id: {
            $concat: [
                {$toString: { $multiply: [{ $floor: { $divide: ["$yearPublished,10"]}}, 10]}},
                "s"
            ]
            },
            count: {$sum: 1 }
        }
    }
]);

// Count by decade
db.books.aggregate([
  {
    $group: {
      _id: { $concat: [ { $substr: [ "$yearPublished", 0, 3 ] }, "0s" ] },
      count: { $sum: 1 }
    }
  }
]);

/*Indexing*/
// Create index on title
db.books.createIndex({ title: 1});

// Compound index on author and yearPublished
db.books.createIndex({ author: 1, yearPublished: 1 });

// Use explain to show index usage
db.books.find({ title: "Atomic Habits" }).explain();