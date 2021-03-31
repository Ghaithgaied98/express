const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("homepage");
});

router.get("/ContactUs", (req, res) => {
  res.sendFile;
});

router.get("/OurServices", (req, res) => {
  res.send("OurServices");
});

module.exports = router;


