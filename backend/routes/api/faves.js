const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth, restoreUser } = require("../../utils/auth");
const { Photo, Fave, User } = require("../../db/models");

const router = express.Router();

//  /faves

// gets all faved photos for session user
router.get("/users/:userId(\\d+)", requireAuth, restoreUser, asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.userId);
  const faves = await Fave.findAll({
    where: {
      userId,
    },
    include: [
      {
        model: Photo,
        // include: [{ model: Fave }, { model: User }],
      },
    ],
  });
  return res.json(faves);
}));

module.exports = router;

// delete a fave on a photo (alternative route, the other one is in photos api)
router.delete("/:faveId", asyncHandler(async(req, res) => {
  const faveId = req.params.faveId;
  console.log('THIS IS FAVE ID IN DELETE ROUTE IN FAVES.JS', faveId)
  const fave = await Fave.findByPk(faveId);
  await fave.destroy();
  return res.json(fave);
}))
