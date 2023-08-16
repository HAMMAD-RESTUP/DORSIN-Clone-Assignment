

function navbar() {
    return (
        <>
        <div id="root"> 
            <nav className="navbar navbar-expand-md fixed-top navbar-custom sticky sticky-dark">
                <div className="container">
                    <a class="logo text-uppercase navbar-brand dorsin" href="index.js">DORSIN</a>
                    <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                                <li className=" nav-item">Home</li>
                                <li className=" nav-item">Services</li>
                                <li className=" nav-item">Features</li> 
                                <li className=" nav-item">Prices</li>
                                <li className=" nav-item">Team</li>
                                <li className=" nav-item">Blog</li>
                                <li className=" nav-item">Contact</li>
                            </ul>
                            <button class="btn btn-danger try " type="submit">Try it Free</button>
                        </div>
                    </div>
                </div>
            </nav>  
        </div>
        </>
    )
}

export default navbar;