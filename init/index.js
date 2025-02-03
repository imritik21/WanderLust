const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// connecting dataBase
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// call main function
main()
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log("error occured while connecting to the DataBase");
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);// here initDataa is object we have passed with data from data.js
    console.log("data was initialized");
};

initDB();