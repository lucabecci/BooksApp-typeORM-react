import React, { Fragment } from 'react'
import axios from 'axios'
function Book({id, name, description, author, color, refresh, setRefresh}) {


    async function deleteBook(e) {
        axios.delete(`http://localhost:4000/books/${e.target.id}`)
        setRefresh(refresh + 1)
    }
    return (
        <Fragment>
            <div className="card border-dark mb-3">
            <div className="card-header">Author: <strong>{author} </strong>  
            <button type="button" className="close" data-dismiss="alert" id={id} onClick={deleteBook}>&times;</button>
            </div>
            <div className="card-body">
                <h4 className="card-title">Title: <strong>{name}</strong></h4>
                <hr/>
                <p className="card-text">Description: {description}</p>
                <p className="card-text">Color: <strong>{color}</strong></p>
            </div>
            </div>
        </Fragment>
    )
}

export default Book
