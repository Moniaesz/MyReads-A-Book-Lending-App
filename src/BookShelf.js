import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        const books = this.props.books
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'></h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        < Book />
                    </ol>
                </div>
            </div>
        )
    }
}

console.log('bookshelf');

export default BookShelf