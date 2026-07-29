import { Router } from "express";
import { getSiteContent } from "../controllers/site.controller.js";

export const siteRouter = Router();

siteRouter.get("/", getSiteContent);
