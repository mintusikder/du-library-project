import { useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";
import { useState } from "react";

const Books = () => {
  const books = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // Initial limit set to 6

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.book_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show all books on "See More" button click
  const handleSeeMore = () => {
    setVisibleCount(filteredBooks.length); // Show all books
  };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredBooks.slice(0, visibleCount).map((book) => (
          <BooksCard key={book._id} book={book} />
        ))}
      </div>

      {/* "See More" Button */}
      {visibleCount < filteredBooks.length && (
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            See More
          </button>
        </div>
      )}

      {/* Message if no books found */}
      {filteredBooks.length === 0 && (
        <p className="text-gray-600 dark:text-gray-300">No books found.</p>
      )}
    </div>
  );
};

export default Books;
