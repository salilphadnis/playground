import express from "express";
import ReviewsCtrl from "./reviews.controller.js"

//Create router
//When people go to urls, this will route the the request to different parts of the application
const router = express.Router();

//Test route
router.route("/").get((req, res) => res.send("hello world"));

//Base route of the app
//Route GET request of movies/:id to apiGetReviews
router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews);

//Route POST request on /new url to apiPostReview
router.route("/new").post(ReviewsCtrl.apiPostReview);

//route GET, PUT and DELETE requests recieved on /:id url to the corresponding API
router.route("/:id")
  .get(ReviewsCtrl.apiGetReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview)

export default router;
