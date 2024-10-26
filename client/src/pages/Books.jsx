import { useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";
import { useState } from "react";

const Books = () => {
  const books = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.book_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full p-4">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search for a book..."
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Book Cards */}
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BooksCard key={book._id} book={book} />)
        ) : (
          <p className="text-gray-600 dark:text-gray-300">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Books;
