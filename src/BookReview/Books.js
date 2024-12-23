import React from 'react'
import './Books.css'

function Books() {
    return (
        <div className="book-review">
          <h2>{bookTitle}</h2>
          <h4>{authorName}</h4>
          <textarea
            placeholder="Write your review"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button onClick={handleAddReview}>Add Review</button>
          <div className="reviews">
            <button onClick={toggleReviews}>
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
export default Books;
