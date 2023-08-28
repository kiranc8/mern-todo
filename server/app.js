const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRouter");
const todoRouter = require("./routes/todoRouter");
const path = require("path")
var cors = require("cors");

dotenv.config();
const app = express(); //Main
app.use(express.json()); //To accept json data
app.use(cors());

app.use("/user", userRouter);
app.use("/todo", todoRouter);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// --------------------------deployment------------------------------

app.get('/',(req,res)=>{
  res.send('API is running');
})

//Deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
