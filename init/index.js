const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL ="mongodb+srv://mitadevi59:cX7ZwIfh9wd3JBhg@wanderlust.otjya.mongodb.net/?retryWrites=true&w=majority&appName=WanderLust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=> ({...obj , owner:'65b3ce67f3e21ab97e7a4986'}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();