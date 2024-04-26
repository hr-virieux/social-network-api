const express = require('express');
const router = express.Router();
const Thought = require('../models/thought');
const User = require('../models/user'); 

// Get all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new thought
router.post('/', async (req, res) => {
    try {
        const { thoughtText, username, userId } = req.body;
        const thought = await Thought.create({ thoughtText, username });
        await User.findByIdAndUpdate(userId, { $push: { thoughts: thought._id } }, { new: true });
        res.status(201).json(thought);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a thought by ID
router.get('/:thoughtId', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a thought by ID
router.put('/:thoughtId', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        res.json(updatedThought);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a thought by ID
router.delete('/:thoughtId', async (req, res) => {
    try {
        await Thought.findByIdAndDelete(req.params.thoughtId);
        res.json({ message: 'Thought deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a reaction to a thought
router.post('/:thoughtId/reactions', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true }
        );
        res.json(thought);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { new: true }
        );
        res.json(thought);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
