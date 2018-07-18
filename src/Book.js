import React, { Component } from 'react'
import ChangeShelfButton from './ChangeShelfButton'

class Book extends Component {
    render() {

        const book = this.props.book
        console.log(this.props.book)

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
                        <ChangeShelfButton />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}


export default Book