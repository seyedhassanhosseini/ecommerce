const mongoose = require("mongoose");
// const MongoClient = require("mongodb").MongoClient;
// var db;
// const client = new MongoClient("mongodb+srv://seyedhassan:CVx5GIGWo5tjXXx7@cluster0.qbff56n.mongodb.net/shop?retryWrites=true&w=majority");
// async function getData() {
//   let result = await client.connect();
//   db = result.db("users");
//   let collection  = db.collection('users')
// };

// getData()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

