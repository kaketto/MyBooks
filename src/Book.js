import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ book, onChangeShelf }) => (
  <div className="book">
    <img alt={book.title} className='bookimage' src={book.imageLinks.thumbnail}/>
    <div className="bookshelf-changer">
      <select onChange={(event) => onChangeShelf(book, event.target.value)} value={book.shelf}>
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
  onChangeShelf: PropTypes.func.isRequired
}

export default Book;
