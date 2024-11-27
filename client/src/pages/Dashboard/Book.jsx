import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://dulibrarybook-server.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    [book.book_title, book.author, book.publisher]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-3xl font-bold text-center">Total Book : {books.length}</h3>
      <div className="p-6">
      
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title, author, or publisher..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-6 mx-auto">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              setBooks={setBooks}
              books={books}
              book={book}
              key={book._id}
            ></BookCard>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            <span className="loading loading-spinner loading-lg"></span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Book;
