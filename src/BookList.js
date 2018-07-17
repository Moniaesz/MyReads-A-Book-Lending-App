import React, { Component } from 'react'

class BookList extends Component {
    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf />
                    </div>
                </div>

            </div>
        )
    }
}

console.log('booklist');


export default BookList