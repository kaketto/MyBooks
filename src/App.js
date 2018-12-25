import React from 'react';
import { Route } from 'react-router-dom'
import Bookshelves from './Bookshelves'
import SearchBook from './SearchBook'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class App extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
		BooksAPI.getAll().then((books) =>
			this.setState({ books }))
  }
  
  changeShelf = (bookToUpdate, newShelf) => {
    const newBooks = this.state.books.map(book => {
      if(book.id !== bookToUpdate.id) return book;
      return {
          ...book,
          shelf : newShelf
      };
    });
    this.setState({books : newBooks});

    BooksAPI.update(bookToUpdate, newShelf);
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <Bookshelves 
            books={this.state.books}
            onChangeShelf={this.changeShelf}
            />
        )}/>
        <Route path="/search" render={() => (
          <SearchBook/>
        )}/>
      </div>
    );
  }
}

export default App;
