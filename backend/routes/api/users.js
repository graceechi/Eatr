const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Photo } = require("../../db/models");

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

// Sign up
router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.signup({ username, email, password });

    // const newProfile = await Profile.create({
    //     userId: user.id,
    // });

    await setTokenCookie(res, user);

    return res.json({
        user
    });
    })
);

// get all users
router.get('/', asyncHandler(async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
}))

// get user profile page with photostream
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await Photo.findAll({ where: { userId: id }, include: User })
  return res.json(user);
}))

module.exports = router;
