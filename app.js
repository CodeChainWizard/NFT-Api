const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const nftRouter = require("./routes/nftRoute");
const usersRouter = require("./routes/userRoute");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// ----- CREATE CUSTOM MIDDLEWARE
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  reqTime = new Date().toUTCString();
  next();
});

// // ---- POST REQUEST
// app.post("/api/v1/nfts", createNFT);

// // ---- get Fetch Single NFT
// app.get("/api/v1/nfts/:id", getSingleNFT);

// // --- PATCH METHOD
// app.patch("/api/v1/nfts/:id", updateNFT);

// // --- DELETE METHOD
// app.delete("/api/v1/nfts/:id", deletedNFT);

// const nftRouter = express.Router();
// const userRouter = express.Router();

app.use("/api/v1/nfts", nftRouter);
app.use("/api/v1/users", usersRouter);

module.exports = app;
