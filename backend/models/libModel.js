const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const libSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        count: Number,
        price: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Export the model
module.exports = mongoose.model("lib", libSchema);
