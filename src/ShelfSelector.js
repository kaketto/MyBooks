import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './utils/BooksAPI'

const ShelfSelector = ({ book, shelf }) => (
  <div className="bookshelf-changer">
    <select onChange={(event) => BooksAPI.update(book, event.target.value)} value={shelf}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
)

ShelfSelector.propTypes = {
	book: PropTypes.object.isRequired,
}

export default ShelfSelector;
