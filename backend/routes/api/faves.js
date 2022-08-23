const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth, restoreUser } = require("../../utils/auth");
const { Photo, Fave, User } = require("../../db/models");

const router = express.Router();

// create and delete faves in photo api routes
// create a fave for a photo
// router.post("/new", requireAuth, asyncHandler(async (req, res) => {
//   const { userId, photoId } = req.body;
//   const fave = await Fave.create({ userId, photoId });
//   return res.json(fave);
// }));

// delete a fave for a photo
  // :id = fave id
// router.delete("/:id(\\d+)", requireAuth, asyncHandler((req, res) => {
//   const faveId = req.params.id;
//   const fave = Fave.findByPk(faveId);
//   await fave.destroy();
//   return res.json(fave);
// }));

// gets all faved photos for session user
router.get("/users/:userId(\\d+)", requireAuth, restoreUser, asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const faves = await Fave.findAll({
    where: {
      userId,
    },
    include: [
      {
        model: User,
      },
      {
        model: Photo,
        include: [{ model: Fave }, { model: User }],
      },
    ],
  });
  return res.json(faves);
}));

module.exports = router;
