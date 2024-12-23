import React, { useState } from "react";
import './BookReview/Books.css'

const BookReview = ({ bookTitle, authorName }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [showReviews, setShowReviews] = useState(false);

  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div className="book-review">
      <h2 className="title">{bookTitle}</h2>
      <h4>{authorName}</h4>
      <textarea
        className="Textarea"
        placeholder="Write your review"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      />
      <button onClick={handleAddReview} className="addreview">Add Review</button>
      <div className="reviews">
        <button onClick={toggleReviews} className="addreview">
          {showReviews ? "Hide Reviews" : "Show All Reviews"}
        </button>
        {showReviews && (
          <ul>
            {reviews.length > 0 ? (
              reviews.map((review, index) => <li key={index}>{review}</li>)
            ) : (
              <p>No reviews yet.</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
export default BookReview;