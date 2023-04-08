const { Router } = require("express");
const router = Router();
const getPokemonId = require("../services/getPokemonId");

router.get("/pokemon/:id", async (req, res, next) => {
  const { id } = req.params;
try {
    const response = await getPokemonId(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
});

module.exports = router;
