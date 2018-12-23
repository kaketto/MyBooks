import React from 'react'
import PropTypes from 'prop-types'
import ShelfSelector from './ShelfSelector'

const Bookshelves = ({ books }) => (
  <div>
    <h1 className='header'>My Books</h1>
    <div className='bookshelf'>
      <h2>Currently Reading</h2>
      <ul className='book-list'>
        {books.filter(book => book.shelf === 'currentlyReading').map(book => (
          <li key={book.title}>
            <img alt={book.title} className='bookimage' src={book.imageLinks.thumbnail}/>
            <ShelfSelector book={book} shelf={book.shelf}/>
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
            <ShelfSelector book={book} shelf={book.shelf}/>
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
            <ShelfSelector book={book} shelf={book.shelf} />
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