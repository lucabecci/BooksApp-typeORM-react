import React, { Fragment,useEffect,useState } from 'react'
import axios from 'axios'

import Book from '../components/Book'
import CreateBook from '../components/CreateBook'
import Message from '../components/Message'
function Books() {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(0)
    useEffect(() => {
        getBooks()
        setLoading(true)
    }, [refresh])

    async function getBooks() {
        const allBooks = await axios.get('http://localhost:4000/books')
        setBooks(allBooks.data.books)
        if(allBooks.data.books.length === 0){
            setLoading(false)
        }
    }
    return (
        <Fragment>
            <div className="container m-auto">
                <div className="row">
                    <div className="col m-4">
                        <CreateBook refresh={refresh} setRefresh={setRefresh}/>
                    </div>
                    <div className="col m-4">
                        <h5 className='text-center'>your Books</h5>
                    {
                            loading ? (
                               books.map( book => (
                                   <Book key={book.id} id={book.id} name={book.name} description={book.description}
                                        author={book.author} color={book.color} setRefresh={setRefresh} refresh={refresh}  />
                               ))
                            ): (
                            <Message msg={`In this section you will find your books.`}/>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Books
