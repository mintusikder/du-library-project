import toast from "react-hot-toast";

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBook = {
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

    fetch("https://dulibrarybook-server.vercel.app/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Book added successfully!");
          form.reset();
        } else {
          toast.error("Failed to add book");
        }
      })
      .catch(() => toast.error("An error occurred while adding the book"));
  };

  return (
    <div className="p-24 bg-[#f4f3f0]">
      <h2 className="text-3xl font-extrabold text-center">Add New Book</h2>
      <form
        onSubmit={handleAddBook}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
      >
        <input
          type="text"
          name="book_title"
          placeholder="Book Title"
          className="block mt-2 w-full rounded-lg border px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="block mt-2 w-full rounded-lg border px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />
        <input
          type="text"
          name="publisher"
          placeholder="Publisher"
          className="block mt-2 w-full rounded-lg border px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="block mt-2 w-full rounded-lg border px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />
        <input
          type="text"
          name="volume"
          placeholder="Volume"
          className="block mt-2 w-full rounded-lg border px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          className="block mt-2 w-full rounded-lg border px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="block mt-2 w-full rounded-lg border px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />
        <input
          type="text"
          name="purchase_method"
          placeholder="Purchase Method"
          className="block mt-2 w-full rounded-lg border px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          className="block mt-2 w-full rounded-lg border px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        />
        <input
          type="submit"
          className="mt-2 px-6 py-2 font-bold text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none"
          value="Add Book"
        />
      </form>
    </div>
  );
};

export default AddBook;
