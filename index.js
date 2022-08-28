const express = require("express");
const { join } = require("path");
const app = express();
const router = express.Router();
const c = require("colors");

router.get("/", function(req, res){
  res.sendFile(join(__dirname+`/index.html`))
  console.log(c.blue("Alguém caiu no rick roll :D"))
})


app.use("/", router)

app.listen(process.env.PORT)

