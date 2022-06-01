const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Photo, Comment, Fave } = require('../../db/models');

// const {
//     singleMulterUpload,
//     singlePublicFileUpload,
// } = require("../../awsS3.js");

const router = express.Router();

// show all photos in db (explore)
router.get('/explore', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({ include: User })
    return res.json(photos);
}))

// show one specific photo
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

// delete photo by user
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletePhoto = await Photo.findByPk(id);
    await deletePhoto.destroy();
    return res.json(deletePhoto);
    // res.status(204).end();
  }))

module.exports = router;
