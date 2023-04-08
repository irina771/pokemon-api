const router = require("express").Router();
const createPokemon = require("../services/createPokemon");

router.post("/", async (req, res, next) => {
  try {
    const newPokemon = await createPokemon(req.body);
    res.status(201).json({
      status: "success",
      message: "Pokemon has been created successfully!",
      data: newPokemon,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
