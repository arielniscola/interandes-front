import { Router } from "express";
import {
  createSalesOrderController,
  generateInstructivoController,
  getAllSalesOrdersController,
  getSalesOrderIDController,
  pdfSalesOrderController,
} from "../controllers/salesOrder";

export const salesOrderRoutes = Router();

salesOrderRoutes.get("/", getAllSalesOrdersController);
salesOrderRoutes.post("/", createSalesOrderController);
salesOrderRoutes.get("/:id", getSalesOrderIDController);
salesOrderRoutes.get("/generate-bl/:id", pdfSalesOrderController);
salesOrderRoutes.get(
  "/generate-instructivo-pdf/:id",
  generateInstructivoController
);
