import React, { Fragment } from 'react'

function Creator() {
    return (
        <Fragment>
            <div className="jumbotron">
                <h1 className="display-4 text-center">Luca Becci</h1>
                <p className="lead text-center">I'm a programmer based in Argentina and I'm 20 years old. I'm a
          fullstack proggrammer in typescript/javascript.</p>
                <hr className="my-4"></hr>
                <p className='text-center'>It uses utility class for typography and spacing to space content out within the larger container.</p>
                <div className="col text-center">
                     <a className='btn btn-primary btn-lg' target='blank' href='https://github.com/lucabecci'>GITHUB</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Creator
