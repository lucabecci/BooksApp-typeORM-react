import React, { Fragment,useEffect,useState } from 'react'
import axios from 'axios'

import Book from '../components/Book'
import CreateBook from '../components/CreateBook'
function Books() {
    const [books, setBooks] = useState({})
    const [refresh, setRefresh] = useState(0)
    useEffect(() => {
        getBooks()
    }, [])

    async function getBooks() {
        const allBooks = await axios.get('http://localhost:4000/books')
        setBooks(allBooks.data.books)
    }
    return (
        <Fragment>
            <div className="container m-auto">
                <div className="row">
                    <div className="col m-4">
                        <CreateBook/>
                    </div>
                    <div className="col m-4">
                    {
                            books.map( book => (
                                <Book name={book.name} description={book.description}
                                      author={book.author} color= {book.color} />
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Books
