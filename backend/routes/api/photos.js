const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Photo, Fave } = require('../../db/models');

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


// -------------------- faves --------------------

// get all faves for one photo
router.get("/:id(\\d+)/fave", asyncHandler(async(req, res) => {
  const photoId = parseInt(req.params.id);
  const faves = await Fave.findAll({
    where: { photoId: photoId }
  })
  return res.json(faves)
}))

// create a fave on a photo
  //  :id = photoId
router.post("/:id(\\d+)/fave", requireAuth, asyncHandler(async (req, res) => {
  const fave = await Fave.create(req.body);
  return res.json(fave);
}));

//  delete a fave on a photo
  //  :id = photoId
router.delete("/:id(\\d+)/fave", requireAuth, asyncHandler(async (req, res) => {
  const photoId = req.params.id;
  const { userId } = req.body;
  const fave = await Fave.findOne({
    where: {
      userId, photoId
    },
    include: [{ model: Photo }, { model: User }],
  });
  await fave.destroy();
  // res.send({ fave, userId });
  return res.json(fave);
}));


module.exports = router;
