const mongoose = require("mongoose");

const VariantSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Cheese Burger", "Double Patty Burger"
  price: { type: Number, required: true },
  image: { type: String }, // Optional, in case variants have different images
});

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true }, // General category name e.g., "Burger"
  price: { type: Number }, // Default price (optional, can be omitted)
  image: { type: String },
  category: { type: String, required: true }, // e.g., "Burger", "Pizza"
  variants: [VariantSchema], // ✅ Now supports multiple burger types
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;



