import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'


class SearchField extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired 
    }

    state = {
        query: '',
        books: []
    }

    filterBooks = (evt) => {
        const query = evt.target.value
        this.setState({query})
        if (query) {
            BooksAPI.search(query).then((response) => {
                response.length > 0 
                ? this.setState({books:response}) 
                : this.setState({books:[]})
            })
        } else { this.setState({books:[]
            })
        }
    }

    render() {

        const { books, updateShelf} = this.props

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/"></Link>
                            <div className="search-books-input-wrapper">
                                <input 
                                type="text" 
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={this.filterBooks}
                                />
                            </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.books.map((book) => (
                                <Book 
                                    books={books}
                                    book={book}
                                    key={book.id}
                                    updateShelf={updateShelf}
                                />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchField