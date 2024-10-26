const AddBook = () => {
    const handleAddBook = (e) => {
      e.preventDefault();
      const form = e.target;
      const bookTitle = form.bookTitle.value;
      const author = form.author.value;
      const publisher = form.publisher.value;
      const volume = form.volume.value;
      const shelf = form.shelf.value;
      const isbn = form.isbn.value;
      const price = form.price.value;
      const purchase = form.purchase.value;
      const year = form.year.value;
      const newBook = {
        bookTitle,
        author,
        publisher,
        volume,
        shelf,
        isbn,
        price,
        purchase,
        year,
      };
      console.log(newBook);
    };
  
    return (
      <div className="p-24 bg-[#f4f3f0]">
        <h2 className="text-3xl font-extrabold text-center">Add New Book</h2>
        <form
          onSubmit={handleAddBook}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
        >
          <div>
            <input
              type="text"
              name="bookTitle"
              placeholder="বইয়ের নাম"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              placeholder="লেখক"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="publisher"
              placeholder="প্রকাশক"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="volume"
              placeholder="সংখ্যা"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="shelf"
              placeholder="Category"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="isbn"
              placeholder="ISBN"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              placeholder="মূল্য"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="purchase"
              placeholder="Purchase"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="year"
              placeholder="Year"
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
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
  