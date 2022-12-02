"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Story",
      [
        {
        id: '21212154',
        userId: "5465456564646acddf",
				title: "User Title",
				content:
					"just a story here...",
				impressions: 0,
				createdAt: new Date(),
				updatedAt: null,
			},
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Story', null);
  },
};
