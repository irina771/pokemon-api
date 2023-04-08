const { Router } = require("express");
const router = Router();
const getTypes = require("../services/getTypes");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await getTypes());
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
});

module.exports = router;
