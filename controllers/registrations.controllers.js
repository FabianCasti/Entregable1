const { Console } = require("console");
const { Registrations } = require("../models/resgistrations.models");

const getallRegistratios = async (req, res) => {
  try {
    const registrations = await Registrations.findAll();

    res.status(200).json({
      status: "success",
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getIdRegistration = async function (req, res) {
  try {
    const { id } = req.params;
    const day = await Registrations.findOne({ where: { id } });
    res.status(200).json({
      status: `success to download the registration for the id: ${id}`,
      data: { day },
    });
  } catch {
    console.log("Unable to find the registration");
  }
};

const createregistrations = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const timecreate = await Registrations.create({ entranceTime });

    res.status(201).json({
      status: "success",
      timecreate,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async function (req, res) {
  try {
    //get the leaving date and id
    console.log("---------------------------in");
    const { id } = req.params;
    const { exitTime } = req.body;

    //search the registration to update
    const updated = await Registrations.findOne({ where: { id } });
    updated.update({ exitTime, status: "out" });
    res.status(202).json({
      status: "Success to log out",
      data: { updated },
    });
  } catch {
    console.log("unable to update");
  }
};
const deleteRegistration = async function (req, res) {
  try {
    //get id
    const { id } = req.params;
    const deleted = await Registrations.findOne({ where: { id } });
    await deleted.update({ status: "cancelled" });
    res.status(202).json({
      status: "succes to cancell the registration",
      body: { deleted },
    });
  } catch {}
};

module.exports = {
  getallRegistratios,
  createregistrations,
  getIdRegistration,
  updateRegistration,
  deleteRegistration,
};
