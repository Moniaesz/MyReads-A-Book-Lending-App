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

        const books = this.props.books
        const updateShelf = this.props.updateShelf

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
                            {this.state.searchedBooks.map(searchBook => {
                                let shelf = 'none'
                                    books.map(book => (
                                        book.id === searchBook.id
                                        ? searchBook.shelf = book.shelf
                                        : searchBook.shelf = shelf
                                    ));
                                return (
                                    <li key={searchBook.id}>
                                        <Book 
                                            books={this.searchedBooks}
                                            book={searchBook}
                                            key={searchBook.id}
                                            updateShelf={updateShelf}
                                            currentshelf={searchBook.shelf}
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