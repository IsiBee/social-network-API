const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser
} = require('../../controllers/user-controllers');

// Set up GET all routes
router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getUserById);

module.exports = router;