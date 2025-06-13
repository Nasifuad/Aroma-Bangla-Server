import { Router } from "express";
import { checkAuth } from "../../utility/checkAuth";
import asyncHandler from "../../utility/asyncHandler";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./product.controller";
const router = Router();

router.get("/getProducts", asyncHandler(getAllProducts));
router.get("/:id", asyncHandler(getProductById));
router.post("/addProduct", checkAuth, asyncHandler(createProduct));
router.put("/:id", checkAuth, asyncHandler(updateProduct));
router.delete("/:id", checkAuth, asyncHandler(deleteProduct));

export const productRoute = router;
