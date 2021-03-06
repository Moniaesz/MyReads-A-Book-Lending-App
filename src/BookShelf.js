import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        const books = this.props.books
        const updateShelf = this.props.updateShelf
        const shelf = this.props.shelf

        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) => (
                            <Book 
                            book={book}
                            key={index}
                            updateShelf={updateShelf}
                            shelf={shelf}
                            />))}
                    </ol>
                </div>
            </div>
        )
    }
}


export default BookShelf