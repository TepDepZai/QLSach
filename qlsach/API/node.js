const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
// const fs = require("fs");

const app = express();
require("dotenv").config();

app.use(express.json());
// app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
const Truyen = require('./models/truyenmodel')


mongoose.connect("mongodb+srv://tep:VmTcr0EMGgYoTvLj@tep.akayhku.mongodb.net/truyen");

app.get("/test",(req,res) => {
  res.json("test")
})

app.get("/truyen", async (req ,res) =>{
  res.json(await Truyen.find())
})

app.post("/uptruyen", async (req,res) => {
  const { 
    tenSach,
    tenTacGia,
    photos,
    description
  } = req.body
  const TruyenDoc = await Truyen.create({
    tenSach,
    tenTacGia,
    photos,
    description
  })
  res.json(TruyenDoc)
})

app.delete("/deletetruyen/:id",async (req,res)=>{
  const id = new mongoose.Types.ObjectId(req.params.id);
  const deleteDoc= await Truyen.deleteOne(id);
  res.json(deleteDoc)
})
app.put("/edittruyen/:id",async (req,res)=>{
  const id = req.params.id;
  const data = req.body
  const editDoc = await Truyen.findByIdAndUpdate(id, data, { new: true });
  res.json(editDoc)
})
app.post("/timtruyen/tentruyen", async(req,res)=>{
  const { tenSach } = req.body;

  const decodedTenSach = decodeURIComponent(tenSach);
  const ketQua = await Truyen.find({
    tenSach: { $regex: decodedTenSach, $options: "i" }
  });

  res.json(ketQua);
})

app.listen(4000)