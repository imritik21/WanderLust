const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    description: String,
    image: {
        type:String,
        required : true,
    },
    price: Number,
    location: String,
    country: String,
});

// using this Schema we will create model
const Listing = mongoose.model("Listing",listingSchema);
// export this model into app.js
module.exports = Listing;