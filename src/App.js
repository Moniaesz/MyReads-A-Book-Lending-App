import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchField from './SearchField'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
        books: []
      }
  }

componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books: books})
  })
}

updateShelf = (book, evt) => {
  BooksAPI.update(book, evt).then(() => {
    book.shelf = evt
    const currentBooks = this.state.books.filter ( b => b.id !== book.id)
    console.log(currentBooks);
    currentBooks.push(book)
    this.setState({
      books: currentBooks
    })
  })
}

  render() {
      return (
        <div className="app">
          <Route path="/search" render={ () => (
            <SearchField 
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
        )}/>

          <Route exact path="/" render={() => (
            <BookList 
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
            )}
          />
          <Link 
          className="open-search"
          to="/search"
          >
          </Link>
      </div>
    )
  }
}


export default App


