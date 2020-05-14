import React, { useState, useEffect } from "react";
import API from "../utils/API";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

function SavedBooks() {
  let [bookResults, setBookResults] = useState();

  function getSavedBooks() {
    API.getBooks().then((res) => {
      setBookResults(res.data);
    });
  }

  useEffect(() => {
    getSavedBooks();
  }, []);

  function deleteBook(id) {
    API.deleteBook(id)
      .then(() => {
        getSavedBooks();
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <>
      <Header />
      <Wrapper>
        {bookResults &&
          bookResults.map((book) => (
            <BookCard
              title={book.title}
              authors={book.authors}
              image={book.image}
              description={book.description}
              link={book.link}
              onClick={deleteBook}
              key={book._id}
              message={"Delete"}
              id={book._id}
            />
          ))}
      </Wrapper>
    </>
  );
}

export default SavedBooks;
