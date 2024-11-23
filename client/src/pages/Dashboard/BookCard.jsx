import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const BookCard = ({ book, books, setBooks }) => {
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
    _id,
  } = book;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/books/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your book has been deleted.",
                icon: "success",
              });
              const remainingBooks = books.filter((book) => book._id !== _id);
              setBooks(remainingBooks);
            }
          });
      }
    });
  };

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

      {/* Buttons on the right side */}
      <div className="flex flex-col space-y-2 ml-4">
        <button className="px-4 py-2 bg-gray-500 text-white rounded">
          <Link to={`/updateBook/${_id}`}>
            <FaRegEdit />
          </Link>
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="px-4 py-2 bg-red-400 text-white rounded"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
