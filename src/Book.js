import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ book, onUpdateShelf }) => (
  <div className="book">
    <img alt={book.title} className="bookimage" src={book.imageLinks ? book.imageLinks.thumbnail : null}/>
    <div className="bookshelf-changer">
      <select onChange={(event) => onUpdateShelf(book, event.target.value)} value={book.shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    <p className="book-title">{book.title}</p>
    <p className="book-authors">{book.authors}</p>
  </div>
)

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default Book;
