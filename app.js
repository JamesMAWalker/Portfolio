var bodyParser = require("body-parser"),
  express = require("express"),
  app = express();

// APP Configuation Settings
app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index");
});



// Listener
app.listen("4000", () => {
    console.log("Portfolio is listening!");
    
})