import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {

    render() {
        const books = this.props.books
        console.log(this.props.books)
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading" books={books.filter((book) => (book.shelf === "currentlyReading"))} />
                        <BookShelf title="Want to Read" books={books.filter((book) => (book.shelf === "wantToRead"))} />
                        <BookShelf title="Read" books={books.filter((book) => (book.shelf === "read"))} />
                    </div>
                </div>

            </div>
        )
    }
}

console.log('booklist');


export default BookList