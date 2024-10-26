const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
//EUHxOQHnQfUhyWUw
//duLibraryBook
const port = process.env.PORT || 5000;
const app = express();
const corsOption = {
  origin: ["http://localhost:5173", ":/http/localhost:5174"],
  credential: true,
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
    const booksCollection =client.db("duLibraryBook").collection("books")

    //get all books from db
    app.get("/books", async (req, res) => {
        const result = await booksCollection.find().toArray()
        res.send(result)
    });
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
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
