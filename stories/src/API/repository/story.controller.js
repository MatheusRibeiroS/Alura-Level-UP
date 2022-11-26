const database = require('../../database/models');

class StoryRepository {
  static async createStory(req, res) {
    try {
      const storyData = req.body;
      const newStory = await database.Stories.create({
        userId: storyData.id,
        title: storyData.title,
        content: storyData.content,
      });
      return res.status(201).json({
        status: 201,
        message: 'Story created successfully',
        data: newStory,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: 'Server error',
      });
    }
  }

  static async getAllStories(req, res) {
    try {
      const allStories = await database.Stories.findAll();
      return res.status(200).json({
        status: 200,
        message: 'All stories retrieved successfully',
        data: allStories,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: 'Server error',
      });
    }
  }

  static async getOneStory(req, res) {
    try {
      const { storyId } = req.params;
      const oneStory = await database.Stories.findOne({
        where: { id: storyId },
      });
      if (!oneStory) {
        return res.status(404).json({
          status: 404,
          error: 'Story not found',
        });
      }
      return res.status(200).json({
        status: 200,
        message: 'Story retrieved successfully',
        data: oneStory,
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 500,
        error: 'Server error',
      });
    }
  }

  static async updateStory(req, res) {
    try {
      const { storyId } = req.params;
      const { title, content } = req.body;
      const { id } = req.user;
      const storyToUpdate = await database.Stories.findOne({
        where: { id: storyId },
      });
      if (!storyToUpdate) {
        return res.status(404).json({
          status: 404,
          error: 'Story not found',
        });
      }
      if (storyToUpdate.userId !== id) {
        return res.status(403).json({
          status: 403,
          error: 'You are not authorized to update this story',
        });
      }
      const updatedStory = await database.Stories.update(
        {
          title,
          content,
        },
        {
          where: { id: storyId },
        }
      );
      return res.status(200).json({
        status: 200,
        message: 'Story updated successfully',
        data: updatedStory,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: 'Server error',
      });
    }
  }

  static async deleteStory(req, res) {
    try {
      const { storyId } = req.params;
      const { id } = req.user;
      const storyToDelete = await database.Stories.findOne({
        where: { id: storyId },
      });
      if (!storyToDelete) {
        return res.status(404).json({
          status: 404,
          error: 'Story not found',
        });
      }
      if (storyToDelete.userId !== id) {
        return res.status(403).json({
          status: 403,
          error: 'You are not authorized to delete this story',
        });
      }
      await database.Stories.destroy({
        where: { id: storyId },
      });
      return res.status(200).json({
        status: 200,
        message: 'Story deleted successfully',
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: 'Server error',
      });
    }
  }
}

module.exports = StoryRepository;