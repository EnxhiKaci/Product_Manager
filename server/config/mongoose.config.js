const mongoose = require("mongoose");


const dbURL = process.env.MONGODB_URI || "mongodb://localhost:27017/products";

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.error("Something went wrong when connecting to the database", err)
  );
