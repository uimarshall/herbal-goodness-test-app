const express = require("express");

const router = express.Router();

router.get("/names", (req, res) => {
	res.send("hello");
});

module.exports = router;
