import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './utils/BooksAPI'

const Bookshelves = ({ books }) => (
  <div>
    <h1 className='header'>My Books</h1>
    <div className='bookshelf'>
      <h2>Currently Reading</h2>
      <ul className='book-list'>
        {books.filter(book => book.shelf === 'currentlyReading').map(book => (
          <li key={book.title}>
            <img alt={book.title} className='bookimage' src={book.imageLinks.thumbnail}/>
            <div className="book-shelf-changer">
              <select onChange={(event) => BooksAPI.update(book, event.target.value).then}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" selected>Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>  
    <div className='bookshelf'>
      <h2>Want to read</h2>
      <ul className='book-list'>
        {books.filter(book => book.shelf === 'wantToRead').map(book => (
          <li key={book.title}>
            <img alt={book.title} className='bookimage' src={book.imageLinks.thumbnail}/>
            <div className="book-shelf-changer">
              <select onChange={(event) => BooksAPI.update(book, event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead" selected>Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>  
    <div className='bookshelf'>
      <h2>Read</h2>
      <ul className='book-list'>
        {books.filter(book => book.shelf === 'read').map(book => (
          <li key={book.title}>
            <img alt={book.title} className='bookimage' src={book.imageLinks.thumbnail}/>
            <div className="book-shelf-changer">
              <select onChange={(event) => BooksAPI.update(book, event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read" selected>Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>  
  </div>
)

Bookshelves.propTypes = {
	books: PropTypes.array.isRequired,
}

export default Bookshelves