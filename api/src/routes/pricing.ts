import { Router } from "express";
import {
  createPricingController,
  getAllPricingsController,
  getPricingIDController,
  updatePricingController,
  pdfPricingController,
} from "../controllers/pricing";

export const pricingRoutes = Router();

pricingRoutes.get("/", getAllPricingsController);
pricingRoutes.get("/:id", getPricingIDController);
pricingRoutes.post("/", createPricingController);
pricingRoutes.put("/", updatePricingController);
pricingRoutes.get("/pdf/:id", pdfPricingController);
