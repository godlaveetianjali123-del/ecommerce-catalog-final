import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import Product from "./models/Product.js";


dotenv.config();


const products = [

  {
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://via.placeholder.com/500",
    category: "Electronics",
    description:
      "High quality wireless headphones with noise cancellation and long battery life.",
    rating: 4.5,
    stock: 25
  },


  {
    name: "Smart Watch",
    price: 149.99,
    image: "https://via.placeholder.com/500",
    category: "Electronics",
    description:
      "A modern smartwatch with fitness tracking and smart notifications.",
    rating: 4.7,
    stock: 15
  },


  {
    name: "Running Shoes",
    price: 79.99,
    image: "https://via.placeholder.com/500",
    category: "Fashion",
    description:
      "Comfortable running shoes designed for everyday workouts.",
    rating: 4.3,
    stock: 40
  },


  {
    name: "Laptop Backpack",
    price: 59.99,
    image: "https://via.placeholder.com/500",
    category: "Accessories",
    description:
      "Durable backpack with laptop protection and multiple compartments.",
    rating: 4.6,
    stock: 30
  }

];



const importData = async () => {

  try {

    await connectDB();


    await Product.deleteMany();


    await Product.insertMany(products);


    console.log("Products Imported Successfully");


    process.exit();


  } catch(error) {


    console.log(error);

    process.exit(1);

  }

};



importData();