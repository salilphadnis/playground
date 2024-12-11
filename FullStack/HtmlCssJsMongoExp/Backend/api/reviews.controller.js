import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {

  static async apiPostReview(req, res, next) {

    try {
      //This is coming from the request body 
      //We type the JSON into Postman for testing

      //movieId can be anything and is sent with the request by the client
      const movieId = req.body.movieId;
      //review is a string
      const review = req.body.review;
      //user is a string
      const user = req.body.user;

      //call a method in the DAO with the above parameters
      //and wait for a respone from the DAO
      //The DAO talks to MongoDB
      const reviewResponse = await ReviewsDAO.addReview(
        movieId, 
        user,
        review
      )

      //Send the response back to client as JSON
      res.json({status: "success"});
    } catch {
      res.status(500).json({error: e.message});
    }

  }

}