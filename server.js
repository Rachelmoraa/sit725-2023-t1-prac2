
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3500;
const routes = require("./routes/Routes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

app.use("", routes);

app.listen(PORT, () => {
    console.log(`app running at port : ${PORT}`)
})
