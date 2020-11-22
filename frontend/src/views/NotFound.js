import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <div className="container">
                    <h1 className="display-4 text-center">ERROR, PAGE NOT FOUND!</h1>
                    <p className="lead text-center">Please insert a valid direction.</p>
                    <hr className='my-4'/>
                    <div className="col text-center">
                     <Link className='btn btn-primary btn-lg item-center' to='/'>TO HOME</Link>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound
