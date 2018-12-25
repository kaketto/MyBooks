import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './utils/BooksAPI'

class SearchBook extends React.Component {
  static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
  }
  
  state = {
    query: '',
    books: [],
    searchError: false
  }

  updateQuery = (query) => {
    this.setState({ query });
    query ? this.getBooks(query) : this.setState({ books: [], searchError: false});
  }

  getBooks = (query) => {
    BooksAPI.search(query).then((books) => {
      if (books.error) {
        this.setState({
          books: [],
          searchError : true
        }); 
      } else {
        const booksWithShelves = books.map(book => {
          let shelfIfIncluded = 'none';
          this.props.books.map(item => item.id === book.id ? shelfIfIncluded = item.shelf : null);
          book.shelf = shelfIfIncluded;
          return book;
        });
        this.setState({
          books : booksWithShelves,
          searchError : false
        });      
      }
    })
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
            className="search-book-input"
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
           />
        </div>
        { this.state.searchError && (
          <div className="error-message">
            <p>No result found. Please try again.</p>
            <p className="search-terms">Search terms are limited, please use one of these ones:</p>
            <p className="search-terms">
            Android, Art, Artificial Intelligence, Astronomy, Austen, Baseball, Basketball, Bhagat, Biography, Brief, Business, Camus, 
            Cervantes, Christie, Classics, Comics, Cook, Cricket, Cycling, Desai, Design, Development, Digital Marketing, 
            Drama, Drawing, Dumas, Education, Everything, Fantasy, Film, Finance, First, Fitness, Football, Future, Games, 
            Gandhi, Homer, Horror, Hugo, Ibsen, Journey, Kafka, King, Lahiri, Larsson, Learn, Literary Fiction, Make, 
            Manage, Marquez, Money, Mystery, Negotiate, Painting, Philosophy, Photography, Poetry, Production, 
            Programming, React, Redux, River, Robotics, Rowling, Satire, Science Fiction, Shakespeare, Singh, 
            Swimming, Tale, Thrun, Time, Tolstoy, Travel, Ultimate, Virtual Reality, Web Development, iOS
            </p>
          </div>
        )}
        <ul className="book-list">
          {this.state.books.map(book => (
            <li key={book.id}>
              <Book book={book} onUpdateShelf={this.props.onUpdateShelf} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchBook;