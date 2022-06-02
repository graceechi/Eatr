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

// delete comment

module.exports = router;
