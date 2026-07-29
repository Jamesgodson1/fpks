import { Router } from "express";
import {
  createQuoteRequest,
  listQuoteRequests
} from "../controllers/quote.controller.js";

export const quoteRouter = Router();

quoteRouter.post("/", createQuoteRequest);
quoteRouter.get("/", listQuoteRequests);
