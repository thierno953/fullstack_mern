import express from "express";
import { createTour, deleteTour, getRelatedTours, getTour, getTours, getToursBySearch, getToursByTag, getToursByUser, updateTour } from "../controllers/tour.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/search", getToursBySearch);
router.get("/tag/:tag", getToursByTag);
router.post("/relatedTours", getRelatedTours);
router.get("/", getTours);
router.get("/:id", getTour);

router.post("/", auth, createTour);
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.get("/userTours/:id", auth, getToursByUser);

export default router;