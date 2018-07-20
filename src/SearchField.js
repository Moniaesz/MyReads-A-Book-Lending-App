import React, { Component } from 'react'
import BrowserRouter from 'react-router-dom'

class SearchField extends Component {

    render() {

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <div className="search-books-input-wrapper">
                            <input 
                            type="text" 
                            placeholder="Search by title or author"
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
                <div className="open-search">
                    <a>Add a book</a>
                </div>
            </div>
        )
    }
}

export default SearchField