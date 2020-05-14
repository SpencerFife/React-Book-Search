import React, { useState } from "react";
import API from "../utils/API";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

function Search() {
  let [userInput, setUserInput] = useState("");

  let [bookResults, setBookResults] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getGoogleResults(userInput)
      .then((res) => {
        console.log(res);
        setBookResults(res.data.items);
      })
      .catch((err) => {
        throw err;
      });
  };

  const saveToDataBase = (book) => {
    console.log(book);
    const contentValidation = book.volumeInfo.title && book.volumeInfo.authors;
    if (contentValidation) {
      API.saveBook({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        image: book.volumeInfo.imageLinks.thumbnail,
        description: book.volumeInfo.description,
        link: book.volumeInfo.infoLink,
      })
        .then(() => setBookResults())
        .catch((err) => {
          throw err;
        });
    } else {
      alert(
        `You haven't entered any information about the book you're looking for...`
      );
    }
  };
  return (
    <>
      <Header />
      <Wrapper>
        <form className="form-group">
          <h1>Search for your book here</h1>
          <input
            className="form-control form-control-lg"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            type="text"
            placeholder="Search"
          />
          <Button onClick={handleFormSubmit}>Search</Button>
        </form>
        <div>
          {bookResults &&
            bookResults.map((book) => (
              <BookCard
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks.thumbnail}
                description={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
                onClick={saveToDataBase}
                book={book}
                key={book.volumeInfo.infoLink}
                message={"Save Book"}
              />
            ))}
        </div>
      </Wrapper>
    </>
  );
}

export default Search;
