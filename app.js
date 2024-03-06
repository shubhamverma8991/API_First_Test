require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 8991;

const product_routes = require("./routes/product");

app.get("/", (req, res) => {
  res.send(`Server ${PORT} is Up and running Smooth`);
});

// middleware or set router
app.use("/api/products", product_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.info(`Server ${PORT} is Up and running Smooth`);
    });
  } catch (error) {
    console.error("error ", error);
  }
};
start();
