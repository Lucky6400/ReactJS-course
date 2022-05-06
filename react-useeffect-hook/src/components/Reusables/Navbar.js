import React from 'react'

const Navbar = ({search, setSearch, handleThemeChange, setSuccessTheme}) => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React Tutorials</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <form className="d-flex w-100 justify-content-center" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group search-bar">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search players"
                            id='search'
                            role="searchbox"
                            required
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </form>
                <div className="offcanvas bg-dark offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body ">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Change Theme</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a onClick={handleThemeChange} className="dropdown-item text-primary" href="#">Theme 1</a>
                                    <a className="dropdown-item text-success" onClick={setSuccessTheme} href="#">Theme 2</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
