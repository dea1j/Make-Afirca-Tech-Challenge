import React from 'react'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>
                    <a style={{ fontWeight:'700', fontSize:'30px' }} className="navbar-brand" href="#">Loaner</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Request Loan <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Transaction</a>
                            </li>
                        </ul>
                        <button className="btn btn-light mr-4 my-2 my-sm-0">Login</button>
                        <button className="btn btn-light my-2 my-sm-0">SignUp</button>
                    </div>

                </div>
            </nav>
        </div>
    )
}
