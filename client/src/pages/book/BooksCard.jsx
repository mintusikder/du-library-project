const BooksCard = ({ book }) => {
  const {
    book_title,
    author,
    publisher,
    category,
    volume,
    isbn,
    price,
    purchase_method,
    year,
  } = book;

  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 flex justify-between">
      {/* Book details */}
      <div>
        <h1
          className="mt-2 text-lg font-semibold text-gray-800 dark:text-white"
          aria-label="Book Title"
        >
          বইয়ের নাম: {book_title}
        </h1>
        <p
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          aria-label="Author"
        >
          লেখক: {author}
        </p>
        <p
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          aria-label="Publisher"
        >
          প্রকাশক: {publisher}
        </p>
        <p
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          aria-label="Volume"
        >
          সংখ্যা: {volume}
        </p>
        <p
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          aria-label="Category"
        >
          Shelf: {category}
        </p>
        <p
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          aria-label="ISBN"
        >
          ISBN: {isbn}
        </p>
        <p
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          aria-label="Price"
        >
          মূল্য: {price}
        </p>
        <p
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          aria-label="Purchase Method"
        >
          Purchase Method: {purchase_method}
        </p>
        <p
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          aria-label="Year"
        >
          Year: {year}
        </p>
      </div>
    </div>
  );
};

export default BooksCard;
