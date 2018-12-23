import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './utils/BooksAPI'

const Book = ({ book, shelf }) => (
  <div className="book">
    <img alt={book.title} className='bookimage' src={book.imageLinks.thumbnail}/>
    <div className="bookshelf-changer">
      <select onChange={(event) => BooksAPI.update(book, event.target.value)} value={shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    <p className='book-title'>{book.title}</p>
    <p className='book-authors'>{book.authors}</p>
  </div>
)

Book.propTypes = {
	book: PropTypes.object.isRequired,
}

export default Book;
