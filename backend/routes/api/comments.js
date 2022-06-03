const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Photo, Comment, Fave } = require('../../db/models');

const router = express.Router();

// show comments on photo
router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    // photoId
    const { id } = req.params;
    const comments = await Comment.findAll({
        where: {
            photoId: id
        },
        include: User
    })
    return res.json(comments);
}))

// create comment
router.post('/:id(\\d+)', requireAuth, restoreUser, asyncHandler(async(req, res) => {
    const { id } = req.params;
    const { userId, comment } = req.body;
    const newComment = await Comment.create({
        userId, comment, photoId: id
    })
    const data = await Comment.findByPk(newComment.id, {
        include: User
    })
    return res.json(data);
}))

// delete comment
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async(req, res) => {
    const comment = await Comment.findByPk(req.params.id);
    await comment.destroy();
    res.json({ comment, message: "deleted" });
}))

module.exports = router;
