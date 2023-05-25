const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

//schema
const servicesSchema = new mongoose.Schema({
  iconName: String,
  title: String,
  desc: String,
});

const servicesModel = new mongoose.model("Services", servicesSchema);

//get
app.get("/api/services", async (req, res) => {
  const { name } = req.query;
  const services = await servicesModel.find();
  if (!name) {
    res.status(200).send(services);
  } else {
    res
      .status(200)
      .send(
        services.filter((x) =>
          x.title.toLowerCase().trim().includes(name.toLowerCase().trim())
        )
      );
  }
});

//delete
app.delete("/api/services/:id", async (req, res) => {
  const { id } = req.params;
  await servicesModel.findByIdAndDelete(id);
  res.send({ massage: "deleted :}" });
});

// post
app.post("/api/services", async (req, res) => {
  const { iconName, title, desc } = req.body;
  const newService = new servicesModel({
    iconName: iconName,
    title: title,
    desc: desc,
  });
  await newService.save();

  res.send({ massage: "posted:)" });
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server: İşliyirəm");
});

DB_KEY = process.env.DB_KEY;
DB_CONNECTION = process.env.DB_CONNECTION;
mongoose.connect(DB_CONNECTION.replace("<password>", DB_KEY)).then(() => {
  console.log("DB: Məndə");
});
