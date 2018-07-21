import React, { Component } from 'react'

class Book extends Component {



    render() {

        const book = this.props.book
        const updateShelf = this.props.updateShelf

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                         <div 
                         className="book-cover" 
                         style={{ 
                            width: 128, 
                            height: 188, 
                            backgroundImage: `url("${book.imageLinks.smallThumbnail}")`
                        }}>
                        </div>
                        <div className="book-shelf-changer">
                          <select
                            value={this.props.shelf}
                            onChange={ (evt) => {
                                updateShelf(book, evt.target.value)
                            }}
                          >
                            <option value="move" disabled = {book.shelf === "move"}>Move to...</option>
                            <option value="currentlyReading" disabled = {book.shelf === "currentlyReading"}>Currently Reading</option>
                            <option value="wantToRead" disabled = {book.shelf === "wantToRead"}>Want to Read</option>
                            <option value="read" disabled = {book.shelf === "read"}>Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}


export default Book