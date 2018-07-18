import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'

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
    console.log(this.state)
  })
}

  render() {
    return (
      <div className="app">
        <BookList books={this.state.books}/>
      </div>
    )
  }
}


export default App