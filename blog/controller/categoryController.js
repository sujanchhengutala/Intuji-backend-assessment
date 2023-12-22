const categoryModel = require("../model/categoryModel");

//? ===================create category============================\\

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }
    const existCategory = await categoryModel.findOne({ name });

    if (existCategory) {
      res.status(400).json("category is already exist");
    }

    const category = await categoryModel.create({
      name,
    });
    res.status(200).json({
      success: true,
      message: "category is created successflly",
      category,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//? ==================================== get all category================================== \\
const getCategory = async (req, res) => {
  try {
    const category = await categoryModel.find();
    res.status(200).json({ category });
  } catch (error) {
    console.log(error.message);
  }
};

//? ===============================get single category=======================================\\
const getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findById(id);
    if (!category) {
      res
        .status(400)
        .json({ message: "no category present please create one first" });
    }
    res.status(200).json({ category });
  } catch (error) {
    console.log(error.message);
  }
};

//? =======================================delete all category ===============================\\

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "category is deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

//? =========================================update category = ==================================\\
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name: name },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "category update succesfully",
      category,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createCategory,
  getCategory,
  getSingleCategory,
  deleteCategory,
  updateCategory,
};
