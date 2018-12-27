import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { Link } from 'react-router-dom';

const shelves = ['currentlyReading', 'wantToRead', 'read'];
const shelfNames = ['Currently Reading', 'Want to read', 'Read'];

const Bookshelves = ({ books, onUpdateShelf }) => (
	<div>
		<h1 className="header">My Books</h1>
		{shelves.map((shelf, index) => (
			<div className="bookshelf" key="shelf">
				<h2>{shelfNames[index]}</h2>
				<ul className="book-list">
					{books.filter(book => book.shelf === shelf).map(book => (
						<li key={book.id}>
							<Book book={book} onUpdateShelf={onUpdateShelf} />
						</li>
					))}
				</ul>
			</div>
		))}
		<Link
			to="/search"
			className="search-link"
		>Search Book</Link> 
	</div>
);

Bookshelves.propTypes = {
	books: PropTypes.array.isRequired,
	onUpdateShelf: PropTypes.func.isRequired
};

export default Bookshelves;