const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
// const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const corsOption = {
  origin: [
    // "http://localhost:5173",
    // "http://localhost:5174",
    // "http://localhost:5175",

    "https://library-book-cd5bc.web.app",
    "https://library-book-cd5bc.firebaseapp.com",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.rmmjiwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const booksCollection = client.db("duLibraryBook").collection("books");

    //api server
    // app.post("/jwt", async (req, res) => {
    //   const user = req.body;
    //   console.log(user);
    //   const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
    //     expiresIn: "1h",
    //   });
    //   res
    //     .cookie("token", token, {
    //       httpOnly: token,
    //       secure: false,
    //       sameSite: "none",
    //     })
    //     .send({ success: true });
    // });

    // Get all books from the database
    app.get("/books", async (req, res) => {
      const result = await booksCollection.find().toArray();
      res.send(result);
    });

    // Insert a new book into the database
    app.post("/books", async (req, res) => {
      const newBook = req.body;
      console.log(newBook);
      const result = await booksCollection.insertOne(newBook);
      res.send(result);
    });

    // Get a single book by ID from the database
    app.get("/books/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await booksCollection.findOne(query);
      res.send(result);
    });

    // Update a book by ID in the database
    app.put("/books/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateBook = req.body;
      const book = {
        $set: {
          book_title: updateBook.book_title,
          author: updateBook.author,
          publisher: updateBook.publisher,
          category: updateBook.category,
          volume: updateBook.volume,
          isbn: updateBook.isbn,
          price: updateBook.price,
          purchase_method: updateBook.purchase_method,
          year: updateBook.year,
        },
      };
      const result = await booksCollection.updateOne(query, book, options);
      res.send(result);
    });

    // Delete a book by ID from the database
    app.delete("/books/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await booksCollection.deleteOne(query);
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Du Library Book Running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
