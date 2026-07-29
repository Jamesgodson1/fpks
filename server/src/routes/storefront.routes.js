import { Router } from "express";
import {
  createOrder,
  createProduct,
  deleteProduct,
  getAdminAnalytics,
  getAdminStorefront,
  getStorefront,
  trackAnalyticsEvent,
  updateOrderStatus,
  updateContent,
  updateProduct,
  updateSettings,
  upsertCategory
} from "../controllers/storefront.controller.js";
import {
  getAdminSession,
  loginAdmin,
  requireAdmin
} from "../middleware/adminAuth.js";

export const storefrontRouter = Router();
export const adminRouter = Router();

storefrontRouter.get("/", getStorefront);
storefrontRouter.post("/orders", createOrder);
storefrontRouter.post("/analytics", trackAnalyticsEvent);

adminRouter.post("/login", loginAdmin);
adminRouter.get("/me", requireAdmin, getAdminSession);

adminRouter.use(requireAdmin);
adminRouter.get("/storefront", getAdminStorefront);
adminRouter.get("/analytics", getAdminAnalytics);
adminRouter.put("/settings", updateSettings);
adminRouter.put("/content", updateContent);
adminRouter.post("/products", createProduct);
adminRouter.put("/products/:id", updateProduct);
adminRouter.delete("/products/:id", deleteProduct);
adminRouter.put("/orders/:id", updateOrderStatus);
adminRouter.post("/categories", upsertCategory);
adminRouter.put("/categories/:id", upsertCategory);
