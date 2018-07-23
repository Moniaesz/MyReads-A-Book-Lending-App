import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'


class SearchField extends Component {


    state = {
        query: '',
        searchedBooks: []
    }

    filterBooks = (event) => {
        const query = event.target.value
        this.setState({query})
        if (query) {
            BooksAPI.search(query).then((response) => {
                if (this.state.searchedBooks.error) {
                    this.setState({searchedBooks:[]})
                }
                response.length > 0 
                ? this.setState({searchedBooks:response}) 
                : this.setState({searchedBooks:[]})
            })
        } else { this.setState({searchedBooks:[]
            })
        }
    }




    render() {

        const { book, books, updateShelf} = this.props

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
                            {this.state.searchedBooks.map(book => {
                                let shelf = "none";
                                return (
                                    <li key={book.id}>
                                        <Book 
                                            books={this.searchedBooks}
                                            book={book}
                                            key={book.id}
                                            updateShelf={updateShelf}
                                            currentshelf={book.shelf}
                                        />
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchField