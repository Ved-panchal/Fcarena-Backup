import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/PaymentRoutes.js";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);
try{
  app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);  
} catch(err){
  res.status(500).json({
    success:false;
    message:err.message;
  })
}
