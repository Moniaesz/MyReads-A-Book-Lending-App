import React, { Component } from 'react'

class Book extends Component {



    render() {

        const book = this.props.book
        const updateShelf = this.props.updateShelf
        let displaySmallThumbnail = book.imageLinks 
        ? book.imageLinks.smallThumbnail
        : '';

        return (
                <div className="book">
                    <div className="book-top">
                         <div 
                         className="book-cover" 
                         style={{ 
                            width: 128, 
                            height: 188, 
                            backgroundImage: `url("${displaySmallThumbnail}")`
                        }}>
                        </div>
                        <div className="book-shelf-changer">
                          <select
                            value={this.props.shelf}
                            onChange={ (event) => {
                                updateShelf(book, event.target.value)
                            }}
                          >
                            <option value="move" disabled = {book.shelf === "move"}>Move to...</option>
                            <option value="currentlyReading" disabled = {book.shelf === "currentlyReading"}>Currently Reading</option>
                            <option value="wantToRead" disabled = {book.shelf === "wantToRead"}>Want to Read</option>
                            <option value="read" disabled = {book.shelf === "read"}>Read</option>
                            <option value="none" disabled = {book.shelf === "none"}>None</option>
                          </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
        )
    }
}


export default Book