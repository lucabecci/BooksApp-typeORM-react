import React, { Fragment } from 'react'

function Book({name, description, author, color}) {
    return (
        <Fragment>
            <div className="card border-dark mb-3">
            <div className="card-header">Author: {author}</div>
            <div className="card-body">
                <h4 className="card-title">Title: {name}</h4>
                <hr/>
                <p className="card-text">Description: {description}</p>
                <p className="card-text">Color: {color}</p>
            </div>
            </div>
        </Fragment>
    )
}

export default Book
