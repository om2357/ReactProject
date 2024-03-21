import React from 'react'

function Navbar(props) {
    return (
        
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
            <div className="container-fluid">
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">{props.Heading}
            
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                    Home
                </a>
                </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    About
                </a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">
                Search
                </button>
                
            </form>
            <div className={`form-check light mx-3 form-switch text-${props.mode ==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
            </div>
        </div>
        </div>
    </nav>

    )
}

// Navbar.propTypes = {
//     Heading: propTypes.string.isRequired
// }
Navbar.defaultProps = {

    Heading: "Please provide Heading"
}

export default Navbar