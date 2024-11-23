import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {
  const bookData = useLoaderData(); // Fetch existing book data
  const {
    _id,
    book_title,
    author,
    publisher,
    category,
    volume,
    isbn,
    price,
    purchase_method,
    year,
  } = bookData || {};

  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedBook = {
      book_title: form.book_title.value,
      author: form.author.value,
      publisher: form.publisher.value,
      category: form.category.value,
      volume: form.volume.value,
      isbn: form.isbn.value,
      price: form.price.value,
      purchase_method: form.purchase_method.value,
      year: form.year.value,
    };

    fetch(`https://library-book-server.vercel.app/books/${_id}`, {
      method: "PUT", // Change to PUT for update
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Book updated successfully!");
        } else {
          toast.error("No changes were made.");
        }
      })
      .catch((error) => {
        toast.error("Failed to update the book.");
        console.error(error);
      });
  };

  return (
    <div className="p-24 bg-[#f4f3f0]">
      <h2 className="text-3xl font-extrabold text-center"> Update Book</h2>
      <form
        onSubmit={handleUpdateBook}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
      >
        <div>
          <input
            type="text"
            name="book_title"
            defaultValue={book_title}
            placeholder="বইয়ের নাম"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="author"
            defaultValue={author}
            placeholder="লেখক"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="publisher"
            defaultValue={publisher}
            placeholder="প্রকাশক"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="category"
            defaultValue={category}
            placeholder="সংখ্যা"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="volume"
            defaultValue={volume}
            placeholder="Category"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="isbn"
            defaultValue={isbn}
            placeholder="ISBN"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            defaultValue={price}
            placeholder="মূল্য"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="purchase_method"
            defaultValue={purchase_method}
            placeholder="Purchase"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="year"
            defaultValue={year}
            placeholder="Year"
            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <input
          type="submit"
          className="mt-2 px-6 py-2 font-bold text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none"
          value="Update Book"
        />
      </form>
    </div>
  );
};

export default UpdateBook;
