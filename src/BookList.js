import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {

    render() {
        const books = this.props.books
        const updateShelf = this.props.moveShelf

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
                        moveShelf={updateShelf}
                        />
                        <BookShelf 
                        title="Want to Read" 
                        books={books.filter((book) => (book.shelf === "wantToRead"))}
                        shelf="wantToRead"
                        moveShelf={updateShelf}
                        />
                        <BookShelf 
                        title="Read" 
                        books={books.filter((book) => (book.shelf === "read"))}
                        shelf="read"
                        moveShelf={updateShelf}
                        />
                    </div>
                </div>

            </div>
        )
    }
}


export default BookList