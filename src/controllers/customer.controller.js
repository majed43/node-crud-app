const Customer = require("../model/customer.model");

const moment = require("moment");
function renderHome(req, res) {
    Customer.find()
        .then((result) => {
            res.render("home", { customers: result, moment: moment });
        }).catch((err) => {
            console.log(err)
            res.status(500).send("server Error")
        })
};
function renderAdd(req, res) {
    res.render("add-customers", { message: null });
};
function viewDetails(req, res) {
    Customer.findById(req.params.id)
        .then((result) => {
            res.render("view", { customer: result, moment: moment });
        })
};
function renderEdit(req, res) {
    Customer.findById(req.params.id)
        .then((result) => {
            res.render("edit", { customer: result, message: null });
        }).catch((err) => {
            console.log(err)
        })
};
function add(req, res) {
    const newCustomer = new Customer(req.body);
    if (newCustomer.firstName == "" && newCustomer.lastName == "") {
        res.render("add-customers", { message: "The first/last name are required", status: "wrong" })
    } else {
        newCustomer.save().then((result) => {
            res.render("add-customers", { message: "Customer added successfully", status: "true" })
        }).catch((err) => {
            console.log(err)
        })
    }
};
function search(req, res) {
    if (req.body.search === "") {
        res.redirect("home")
    } else {
        Customer.find({ $or: [{ firstName: req.body.search }, { lastName: req.body.search }] })
            .then((result) => {
                res.render("search-result.ejs", { customers: result, moment: moment, searchContent: req.body.search });
            }).catch((err) => {
                console.log(err)
            })
    }
};
function remove(req, res) {
    Customer.findByIdAndDelete(req.params.id).then(() => {
        res.redirect("/home")
    })
};
function edit (req, res)  {
    Customer.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.redirect("/home")
    })
}
module.exports = { renderHome, renderAdd, viewDetails, renderEdit, add, search, remove,edit }
