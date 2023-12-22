const categoryModel = require("../model/categoryModel");
const blogModel = require("../model/blogModel");

//? ==========================create blog=============================================
const createBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const existCategory = await categoryModel.findOne({ name: category });
    if (!existCategory) {
      res.status(400).json({
        success: false,
        message: "Invalid category",
      });
    }

    const blog = await blogModel.create({
      title,
      description,
      category: existCategory._id,
    });
    res.status(200).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//? =============================================update blog===============================

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category } = req.body;
    const existCategory = await categoryModel.findOne({ name: category });
    if (!existCategory) {
      res.status(400).json({
        success: false,
        message: "Invalid category",
      });
    }
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { title, description, category: existCategory._id },
      { new: true }
    );

    res
      .status(200)
      .json({ success: true, message: "Blog update successfully", blog });
  } catch (error) {
    console.log(error.message);
  }
};

//?====================================get all blog==============================================

const getAllBlog = async (req, res) => {
  try {
    const blog = await blogModel.find();
    res.status(200).json({
      success: true,
      message: "All blogs are displayed successfully",
      blog,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    res.status(200).json({
      success: true,
      message: "single blog are displayed successfully",
      blog,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await blogModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: " blog is deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createBlog,
  updateBlog,
  getAllBlog,
  getSingleBlog,
  deleteBlog,
};
