import express from "express";
import { createSchool, deleteSchool, getAllSchools, getSchool, updateSchool } from "../Controllers/schoolController.js";

const router = express.Router();

router.get("/", getAllSchools);
router.get("/:id", getSchool);
router.post("/", createSchool);
router.put("/:id", updateSchool);
router.delete("/:id", deleteSchool);

export default router;