const express = require("express");
const {
  createBlog,
  updateBlog,
  getAllBlog,
  getSingleBlog,
  deleteBlog,
} = require("../controller/blogController");

const blogRouter = express.Router();

blogRouter.post("/create-blog", createBlog);
blogRouter.get("/getAll-blog", getAllBlog);
blogRouter.patch("/update-blog/:id", updateBlog);
blogRouter.get("/get-single-blog/:id", getSingleBlog);
blogRouter.delete("/delete-blog/:id", deleteBlog);

module.exports = blogRouter;
