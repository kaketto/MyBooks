import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './utils/BooksAPI'

class SearchBook extends React.Component {
  static propTypes = {
		books: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired
  }
  
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()});
    if (query) {
      this.getBooks(query);
    }
  }

  getBooks = (query) => {
    BooksAPI.search(query).then((books) => {
      const booksWithShelves = books.map(book => {
        let shelfIfIncluded = 'none';
        this.props.books.map(item => item.id === book.id ? shelfIfIncluded = item.shelf : null);
        book.shelf = shelfIfIncluded;
        return book;
      });
      this.setState({books : booksWithShelves});      
      }
    )
  }

  render() {
    return (
      <div>
        <h1 className="header">My Books</h1>
        <div className="search-bar">
          <Link
            to="/"
            className="back-link"
          >Back</Link> 
          <input
            className="search-book"
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
           />
        </div>
        <ul className="book-list">
          {this.state.books.map(book => (
            <li key={book.id}>
              <Book book={book} onChangeShelf={this.props.onChangeShelf} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchBook;