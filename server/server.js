import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";


dotenv.config();


// Connect Database
// connectDB();


const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// API Routes
app.use("/api/products", productRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("E-Commerce API Running");
});


// Server Port
const PORT = process.env.PORT || 5000;


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});