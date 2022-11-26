const { Router } = require('express');
const StoryRepository = require('../repository/story.controller');

const router = Router();

router.get('/stories', StoryRepository.getAllStories);

router.get('/stories/:storyId', StoryRepository.getOneStory);

router.post('/stories', StoryRepository.createStory);

router.put('/stories/:storyId', StoryRepository.updateStory);

router.delete('/stories/:storyId', StoryRepository.deleteStory);

module.exports = router;