import React, { Fragment, useState } from 'react'
import axios from 'axios'


import Message from './Message'
function CreateBook({refresh, setRefresh}) {
    const [book, setBook] = useState({
        name: '',
        description: '',
        author: ''
    })
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        try{
            setError(false)
            await axios.post('http://localhost:4000/books', book)
            setRefresh(refresh + 1)
            setBook({
                name: '',
                description: '',
                author: ''
            })
        }
        catch(e){
            setError(true)
        }
    }  

    return (
        <Fragment>
            {error ? (
                <Message msg='PLEASE, INSERT ALL CAMPS'/>
            ): null}
            <form>
                <h5 className='text-center'>ADD NEW BOOK</h5>
            <div className="form-group m-auto">
                <label>Title</label>
                <input type="text" name='name' className="form-control" aria-describedby="title" onChange={handleChange} value={book.name}/>
                <small className="form-text text-muted">This is required.</small>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea name='description' value={book.description} className="form-control" onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
                <label>Author</label>
                <input name='author' type="text" value={book.author} className="form-control" aria-describedby="author" onChange={handleChange}/>
            </div>
            <div className="form-group">
            <label>Select your color</label>
            <select multiple="" className="form-control" name='color' onChange={handleChange}>
                <option className='text-uppercase' defaultValue=''>CLICK ME FOR SEE ALL COLORS</option>
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
            <button type="submit" className="btn btn-primary" onClick={onSubmit}>SAVE</button>
            </form>
        </Fragment>
    )
}

export default CreateBook
