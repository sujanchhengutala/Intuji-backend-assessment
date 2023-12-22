const express = require("express");
const {
  createCategory,
  getCategory,
  deleteCategory,
  getSingleCategory,
  updateCategory,
} = require("../controller/categoryController");

const categoryRouter = express.Router();

categoryRouter.post("/create-category", createCategory);
categoryRouter.get("/get-category", getCategory);
categoryRouter.get("/get-single-category/:id", getSingleCategory);
categoryRouter.delete("/delete-category/:id", deleteCategory);
categoryRouter.put("/update-category/:id", updateCategory);

module.exports = categoryRouter;
