import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import { accountRoutes } from './http/routes/account-routes.js';
import { errorMiddleware } from './http/middlewares/error-handler.middleware.js'


const port = process.env.SERVER_PORT || 3000;
const app = express();

app.use(express.json());
app.use(accountRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
});