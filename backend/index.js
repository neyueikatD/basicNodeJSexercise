const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./db/dbConnect"); 
const PostRouter = require("./routes/PostRouter"); 

const app = express();

dbConnect();

app.use(cors());
app.use(express.json());

app.use("/api", PostRouter);

app.listen(8080, () => {
  console.log("✅ Server đang chạy tại http://localhost:8080");
});
