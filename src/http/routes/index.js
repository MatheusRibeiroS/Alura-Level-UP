import express from 'express';
import { accountRoutes } from './account-routes.js';

const routes = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send("Server is running");
  });

  app.use(express.json(), accountRoutes);
};

export default routes;