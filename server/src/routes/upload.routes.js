import { Router } from "express";
import multer from "multer";
import { uploadAsset } from "../controllers/upload.controller.js";
import { requireAdmin } from "../middleware/adminAuth.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024
  }
});

export const uploadRouter = Router();

uploadRouter.post("/", requireAdmin, upload.single("file"), uploadAsset);
