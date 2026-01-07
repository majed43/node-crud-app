const express = require("express");
const app = express();
const port = process.env.PORT ||3000;
const path = require('path');
const mongoose = require("mongoose");
const methodOverride = require("method-override");
mongoose.connect("mongodb+srv://majd121289_db_user:AQlfZHFj9rtZLBWJ@cluster0.aioc0ie.mongodb.net/?appName=Cluster0").then((result) => {
    console.log("connect to db");
}).catch((err) => {
    console.log("err with connect");
    console.log(err)
});
app.use("/static", express.static("node_modules/bootstrap-icons"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, '..', 'node_modules/bootstrap/dist')));
app.use("/bootstrap-icons", express.static(path.join(__dirname, '..', 'node_modules/bootstrap-icons/font')));
app.use("/axios", express.static(path.join(__dirname, '..', "node_modules/axios/dist")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
const customerRouter=require("./routes/customer.routes.js");
app.use(customerRouter);
app.listen(port, () => {
    console.log("http://localhost:" + port);
    console.log(__dirname);
});