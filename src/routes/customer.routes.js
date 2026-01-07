const express=require("express");
const router=express.Router();
const Customer = require("../model/customer.model.js");
const customerController=require("../controllers/customer.controller.js");
router.get("/",customerController.redirectHome)
router.get("/home",customerController.renderHome);
router.get("/add-customers",customerController.renderAdd);
router.get("/view/:id",customerController.viewDetails);
router.get("/edit/:id",customerController.renderEdit);
router.post("/add-customers",customerController.add);
router.post("/search",customerController.search);
router.delete("/delete/:id",customerController.remove);
router.put("/edit/:id",customerController.edit);
module.exports=router
