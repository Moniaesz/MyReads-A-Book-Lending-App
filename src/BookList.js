import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {

    render() {
        const books = this.props.books
        const updateShelf = this.props.updateShelf

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf 
                        title="Currently Reading" 
                        books={books.filter((book) => (book.shelf === "currentlyReading"))}
                        shelf="currentlyReading"
                        updateShelf={updateShelf}
                        />
                        <BookShelf 
                        title="Want to Read" 
                        books={books.filter((book) => (book.shelf === "wantToRead"))}
                        shelf="wantToRead"
                        updateShelf={updateShelf}
                        />
                        <BookShelf 
                        title="Read" 
                        books={books.filter((book) => (book.shelf === "read"))}
                        shelf="read"
                        updateShelf={updateShelf}
                        />
                    </div>
                </div>

            </div>
        )
    }
}


export default BookList