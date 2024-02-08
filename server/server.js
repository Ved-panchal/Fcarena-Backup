import { app } from "./app.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id : process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

export default function server() {
  const PORT = process.env.PORT || 4000;

  const server = app.listen(PORT, () =>
    console.log(`Server is working on ${PORT}`)
  );

  return server;
}
