import 'dotenv/config';
import express from 'express';
import { accountRoutes } from './http/routes/account-routes.js';
import { errorMiddleware } from './http/middlewares/error-handler.middleware.js';
import routes from './http/routes/index.js';

const port = process.env.SERVER_PORT || 3000;
const app = express();
routes(app);

app.use(express.json());
app.use(accountRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
});