const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Photo, Comment, Fave } = require('../../db/models');

const {
    singleMulterUpload,
    singlePublicFileUpload,
} = require("../../awsS3.js");

const router = express.Router();

// upload image
// router.post('', requireAuth, asyncHandler(async (req, res) => {
//     const { caption, imageUrl, userId } = req.body;
//     const newPhoto = await Photo.create({ caption, imageUrl, userId });
//     return res.json(newPhoto);
// }))

// upload image with AWS S3
router.post(
    "/",
    singleMulterUpload("image"),
    asyncHandler(async (req, res) => {
      const { userId, caption } = req.body;
      // let { image } = req.body;

      // if (req.file) {
      //   imageUrl = await singlePublicFileUpload(req.file);
      // } else {
      //   imageUrl = image;
      // }
      const imageUrl = await singlePublicFileUpload(req.file);

      const newPhoto = await Photo.create({
        userId,
        caption,
        imageUrl,
      });
      // const createdPhoto = await Photo.findByPk(newPhoto.id, {
      //   include: [{ model: User }],
      // });
      // console.log('---------------------------this is createdPhoto in backend route', createdPhoto)
      // res.json(createdPhoto);
      return res.json(newPhoto);
    })
  );

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
  }))

module.exports = router;
