"use strict";

import express from 'express';

// Controllers (route handlers)
import * as homeController from "./api/home";
import * as apiController from "./api/api";

// Create Express server
const app = express();


// Express configuration
app.set("port", process.env.PORT || 3000);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/api", apiController.getApi);

export default app;
