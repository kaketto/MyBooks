import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './utils/BooksAPI'

const SearchBook = () => (
  <div>
    <h1 className='header'>My Books</h1>
    <div className='search-bar'>
      <Link
        to='/'
        className='back-link'
      >Back</Link> 
      <input
        className='search-contacts'
        type='text'
        placeholder='Search by title or author'
//         value={''}
        onChange={(event) => ''}
       />
    </div>
  </div>
)

export default SearchBook;