const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Photo, Comment, Fave } = require('../../db/models');

// const {
//     singleMulterUpload,
//     singlePublicFileUpload,
// } = require("../../awsS3.js");

const router = express.Router();

// router.get("/explore", requireAuth, restoreUser, asyncHandler(async (req, res) => {
//     const photos = await Photo.findAll({
//         include: [{ model: User }, { model: Fave }],
//         });
//         return res.json(photos);
//     })
// );

// show all photos in db
router.get('/explore', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({ include: User })
    return res.json(photos);
}))

// show specific photo
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { id } = req.params;
    let photo = await Photo.findByPk(id, { include: [User] });

    return res.json(photo);
}))

// update photo by user
router.put('/:id(\\d+)', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { caption } = req.body;
    const photo = await Photo.update(req.body, { where: { id } })
    const newPhoto = await Photo.findByPk(id, { include: [User] });

    return res.json(newPhoto);
}))

module.exports = router;
