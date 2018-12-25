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
  
  updateShelf = (bookToUpdate, newShelf) => {
    const booksWithUpdatedShelf = this.state.books.map(book => {     
      if(book.id !== bookToUpdate.id) return book;
      return {
          ...book,
          shelf : newShelf
      };
    });
    if(!this.state.books.includes(bookToUpdate)) {
      bookToUpdate.shelf = newShelf;
      booksWithUpdatedShelf.push(bookToUpdate);
    }
    this.setState({books : booksWithUpdatedShelf});
    BooksAPI.update(bookToUpdate, newShelf);
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <Bookshelves 
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
            />
        )}/>
        <Route path="/search" render={() => (
          <SearchBook
            books={this.state.books}
            onUpdateShelf={this.updateShelf}/>
        )}/>
      </div>
    );
  }
}

export default App;
