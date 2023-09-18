const express = require("express");
const {
  createPost,
  getBlogs,
  getBlogById,
  deleteByBlogID,
} = require("../controllers/post");
const authMiddleware = require("../middlewares/auth");

const postRouter = express.Router();

postRouter.post("/", authMiddleware, createPost);
postRouter.get("/", getBlogs);
postRouter.patch("/update/:id", authMiddleware, getBlogById);
postRouter.delete("/delete/:id", authMiddleware, deleteByBlogID);

module.exports = postRouter;
