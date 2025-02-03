// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// // require listing.js
// const Listing = require("./models/listing.js"); // if this executed then DB will show in Mongoose
// const path = require("path");

// // connecting dataBase
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// // call main function
// main()
//     .then(()=>{
//         console.log("Connected to DB");
//     })
//     .catch((err)=>{
//         console.log("error occured while connecting to the DataBase");
//     });

// async function main(){
//     await mongoose.connect(MONGO_URL);
// }
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));
// app.use(express.urlencoded({ extended: true })); // data in params should pass
// /// craeting api
// app.get("/",(req,res)=>{
//     console.log("Hi, I am root ");
//     res.send("Hi, I am root");
// });


// app.get("/listings",async(req,res)=>{
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs",{allListings}); // to use ejs require path
// });
// // NEW Route
// app.get("/listings/new",(req,res)=>{
//     res.render("listings/new.ejs");
// });
// // after this route you will get a from new.ejs
// // but to submit the data and redirect to /listings
// // we create CREATE ROUTE

// // show route
// app.get("/listings/:id",async(req,res)=>{
//     let {id} = req.params;
//     // find on basis of id
//     const listing = await Listing.findById(id);
//     res.render("listings/show.ejs",{listing});
// });

// // CREATE ROUTE
// app.post("/lisitngs", async (req,res)=>{
//     // let {title,description,image,price,location,country} = req.body;
//     // instead this we can create an object and extract object here
//     let {listing} = req.body;
//     console.log(listing);
//     res.send("Listings Received");
// });


// // app.get("/testListing",async(req,res)=>{
// //     let sampleListing = new Listing({
// //         title: "My Home",
// //         description: "By the beach",
// //         price: 1200,
// //         location: "Calanguate,Goa",
// //         country:"India",
// //     });
// //     await sampleListing.save();
// //     console.log("Sample was saved");
// //     res.send("Successful testing");
// // });



// app.listen(8080,()=>{
//     console.log("Server is Listening to port 8080 ");
// })
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// require listing.js
const Listing = require("./models/listing.js"); // if this executed then DB will show in Mongoose
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const ejsMate = require("ejs-mate");

// connecting dataBase
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// call main function
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("error occurred while connecting to the DataBase");
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data
// app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
// to use static files i.e public/css
app.use(express.static(path.join(__dirname,"/public")));

// Root route
app.get("/", (req, res) => {
    console.log("Hi, I am root");
    res.send("Hi, I am root");
});

// Index route for listings
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings }); // To use ejs, ensure path is correct
});

// New listing form route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Show route for individual listings
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

// Create route for new listings
app.post("/listings", async (req,res)=>{
    // let {title,description,image,price,loction,country} = req.body;
    // let listing = req.body.listing;
    // create instance of listing
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    // console.log(listing);
});
// EDIT ROUTE
app.get("/listings/:id/edit",async (req,res)=>{
    // as we need data to edit so we'll aquire data from id
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

//UPDATE ROUTE
app.put("/listings/:id", async(req,res)=>{
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings");
});

// DELETE route
app.delete("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})
// Start the server
app.listen(8080, () => {
    console.log("Server is Listening to port 8080");
});
