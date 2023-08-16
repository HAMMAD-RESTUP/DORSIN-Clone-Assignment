


function footer() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="mt-4 col-lg-3">
                            <h4>DORSIN</h4>
                            <div className="text-muted mt-4">
                                <ul className="list-unstyle footer-list">
                                    <li><a href='#'>Home</a></li>
                                    <li><a href='#'>About Us</a></li>
                                    <li><a href='#'>Careers</a></li>
                                    <li><a href='#'>Contact Us</a></li>

                                </ul>
                            </div>

                        </div>
                        <div className="mt-4 col-lg-3">
                            <h4>Information</h4>
                            <div className="text-muted mt-4">
                                <ul className="list-unstyle footer-list">
                                    <li><a href='#'>Terms & Conditions</a></li>
                                    <li><a href='#'>About Us</a></li>
                                    <li><a href='#'>Jobs</a></li>
                                    <li><a href='#'>Bookmarks</a></li>

                                </ul>
                            </div>


                        </div>
                        <div className="mt-4 col-lg-3">
                            <h4>Support</h4>
                            <div className="text-muted mt-4">
                                <ul className="list-unstyle footer-list">
                                    <li><a href='#'>FAQ</a></li>
                                    <li><a href='#'>Contact</a></li>
                                    <li><a href='#'>Disscusion</a></li>

                                </ul>
                            </div>

                        </div>
                        <div className="mt-4 col-lg-3">
                            <h4>Subscribe</h4>
                            <div className="text-muted mt-4">
                                <p>
                                    In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.

                                </p>
                            </div>

                            <form className="subscribe">
                                <input placeholder="Email" className="form-control" />
                                <a className="submit" href="#"></a>

                            </form>

                        </div>

                    </div>
                </div>

            </footer>
            <div className="footer-alt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="float-start pull-none">
                                <p className="copy-rights text-muted">
                                2019 - 2023  © Dorsin - Themesbrand
                                </p>
                            </div>
                            <div className="float-end pull-none">
                                <img src="http://dorsin.react.themesbrand.com/assets/images/payment.png" alt="payment" height={36}/>
                            </div>
                            <div className="clearfix"></div>

                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default footer;