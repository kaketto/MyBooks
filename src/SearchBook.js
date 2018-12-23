import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './utils/BooksAPI'

const SearchBook = () => (
  <div>
    <h1 className='header'>My Books</h1>
    <p>Search new book</p>
    <div>
      <input
        className='search-contacts'
        type='text'
        placeholder='Search book'
        value={''}
        onChange={(event) => ''}
      />
    </div>
  </div>
)

export default SearchBook;