import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Bookshelves from './Bookshelves'
import SearchBook from './SearchBook'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
		BooksAPI.getAll().then((books) =>
			this.setState({ books }))
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Bookshelves books={this.state.books}/>
        )}/>
        <Route path='/search' render={() => (
          <SearchBook/>
        )}/>
      </div>
    );
  }
}

export default App;
