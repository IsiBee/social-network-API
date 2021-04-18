const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought
} = require('../../controllers/thought-controllers');

// Set up GET all routes
router.route('/')
    .get(getAllThoughts)
    .post(addThought);

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought);

router.route('/:thoughtId/:userId')
    .delete(removeThought);

module.exports = router;