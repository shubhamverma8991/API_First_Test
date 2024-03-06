const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// const uri =
//   "mongodb+srv://shubhamv2010:beast8991@shubhamapi.nnxnrfm.mongodb.net/ShubhamAPI?retryWrites=true&w=majority&appName=ShubhamAPI";

const connectDB = (uri) => {
  // console.log("here ");
  return mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = connectDB;
