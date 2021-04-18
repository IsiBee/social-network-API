const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    addReaction,
    removeReaction,
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

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


module.exports = router;