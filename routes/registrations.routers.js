const express = require("express");
const {
  getallRegistratios,
  createregistrations,
  getIdRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registrations.controllers");

const registrationRouters = express.Router();

registrationRouters.get("/", getallRegistratios);
registrationRouters.get("/:id", getIdRegistration);
registrationRouters.post("/", createregistrations);
registrationRouters.patch("/:id", updateRegistration);
registrationRouters.delete("/:id", deleteRegistration);

module.exports = { registrationRouters };
