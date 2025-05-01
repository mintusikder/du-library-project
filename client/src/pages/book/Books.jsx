import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";
import { Helmet } from "react-helmet-async";

const Books = () => {
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
      <Helmet>
        <title>Library | Book</title>
      </Helmet>

      {/* Fixed Search Input */}
      <div className="fixed flex items-center justify-center top-16  w-5/6 z-10 ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title, author, or publisher..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-6    pt-[65px] mx-auto">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BooksCard book={book} key={book._id}></BooksCard>
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

export default Books;
