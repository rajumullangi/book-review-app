import React from "react";
import BookReview from "./BookReview";

const Books = () => {
  return (
    <>
    <div>
      <BookReview bookTitle="Title:To Kill A Mocking Bird" authorName="Auther:Harper lee" />
    </div>
    <div>
        <BookReview bookTitle="Title:The Great Catch By" authorName="Auther:F.Scott" />
    </div>
    <div>
    <BookReview bookTitle="Title:The Catcher in the Rai" authorName="Auther:Jd Salinger" />
    </div>
    </>
  );
};

export default Books;
