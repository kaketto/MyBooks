import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'

const Bookshelves = ({ books, onChangeShelf }) => (
  <div>
    <h1 className="header">My Books</h1>
    <div className="bookshelf">
      <h2>Currently Reading</h2>
      <ul className="book-list">
        {books.filter(book => book.shelf === 'currentlyReading').map(book => (
          <li key={book.id}>
            <Book book={book} onChangeShelf={onChangeShelf} />
          </li>
        ))}
      </ul>
    </div>  
    <div className="bookshelf">
      <h2>Want to read</h2>
      <ul className="book-list">
        {books.filter(book => book.shelf === 'wantToRead').map(book => (
          <li key={book.id}>
            <Book book={book} onChangeShelf={onChangeShelf} />
          </li>
        ))}
      </ul>
    </div>  
    <div className="bookshelf">
      <h2>Read</h2>
      <ul className="book-list">
        {books.filter(book => book.shelf === 'read').map(book => (
          <li key={book.id}>
            <Book book={book} onChangeShelf={onChangeShelf} />
          </li>
        ))}
      </ul>
    </div>
    <Link
      to="/search"
      className="search-link"
      >Search Book</Link> 
  </div>
)

Bookshelves.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Bookshelves