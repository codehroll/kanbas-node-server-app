import express from "express";
// const express = require("express");
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import "dotenv/config";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import session from "express-session";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
    // Configures CORS to allow frontend requests (from localhost:3000 in development or a Netlify deployment in production).
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",

  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}

app.use(session(sessionOptions));
app.use(express.json());

UserRoutes(app);
CourseRoutes(app);
// EnrollmentRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);