import React from 'react'

export default function header() {
    return (
        <div>
            <header className="bg-success text-white p-4 mb-3">
                <div className="container">
                    <h3>Todos Application</h3>
                    <span id="time" className="float-right"><h5></h5></span>
                </div>       
            </header>
        </div>
    )
}
