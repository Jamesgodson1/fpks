import { Readable } from "node:stream";
import { cloudinary } from "../config/cloudinary.js";
import { dbExecute, dbQuery, ensureAppSchema } from "../config/mysql.js";

function uploadBuffer(file) {
  return new Promise((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      {
        folder: "fuelspack",
        resource_type: "auto"
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    Readable.from(file.buffer).pipe(upload);
  });
}

export async function uploadAsset(req, res, next) {
  try {
    if (!req.file) {
      const error = new Error("No file uploaded.");
      error.status = 400;
      throw error;
    }

    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      const error = new Error("Cloudinary is not configured.");
      error.status = 500;
      throw error;
    }

    const result = await uploadBuffer(req.file);
    await ensureAppSchema();
    const insert = await dbExecute(
      "INSERT INTO `MediaAsset` (`cloudinaryPublicId`, `url`, `altText`, `assetType`) VALUES (?, ?, ?, ?)",
      [result.public_id, result.secure_url, req.body.altText || req.file.originalname, result.resource_type]
    );
    const [asset] = await dbQuery("SELECT * FROM `MediaAsset` WHERE id = ? LIMIT 1", [insert.insertId]);

    res.status(201).json(asset);
  } catch (error) {
    next(error);
  }
}
