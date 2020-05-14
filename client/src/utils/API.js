import axios from "axios";

export default {
  //axios functions for searching Google/book list (get), saving (post), and deleting (delete) books from book list
  getGoogleResults(userInput) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${userInput}`
    );
  },
  getBooks() {
    return axios.get(`/api/books`);
  },
  deleteBook(id) {
    return axios.delete(`/api/books/${id}`);
  },
  saveBook(bookData) {
    return axios.post(`/api/books`, bookData);
  },
};
