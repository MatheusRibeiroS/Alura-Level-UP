const bodyParser = require("body-parser");
const stories = require("./story.router.js");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(stories)
};
