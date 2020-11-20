import React, { Fragment } from 'react'

function CreateBook() {
    return (
        <Fragment>
            <form>
                <h5 className='text-center'>ADD NEW BOOK</h5>
            <div className="form-group m-auto">
                <label>Title</label>
                <input type="text" className="form-control" aria-describedby="title"/>
                <small className="form-text text-muted">This is required.</small>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control"></textarea>
            </div>
            <div className="form-group">
                <label>Author</label>
                <input type="text" className="form-control" aria-describedby="author"/>
            </div>
            <div className="form-group">
            <label>Example multiple select</label>
            <select multiple="" className="form-control" name='color'>
                <option className='text-uppercase' value='red'>RED</option>
                <option className='text-uppercase'value='blue'>BLUE</option>
                <option className='text-uppercase'value='white'>WHITE</option>
                <option className='text-uppercase'value='black'>BLACK</option>
                <option className='text-uppercase'value='green'>GREEN</option>
                <option className='text-uppercase'value='yellow'>YELLOW</option>
                <option className='text-uppercase'value='pink'>PINK</option>
                <option className='text-uppercase'value='orange'>ORANGE</option>
            </select>
            </div>
            <button type="submit" className="btn btn-primary">SAVE</button>
            </form>
        </Fragment>
    )
}

export default CreateBook
