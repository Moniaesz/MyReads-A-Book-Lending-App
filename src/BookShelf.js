import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        const books = this.props.books
        console.log(this.props)
        console.log(this.props.books)
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) => (<Book book={book} key={index} />))}
                    </ol>
                </div>
            </div>
        )
    }
}

console.log('bookshelf');

export default BookShelf