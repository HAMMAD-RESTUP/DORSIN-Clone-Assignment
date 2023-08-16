

function form() {
    return (
        <>
            <section className="section" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h1 class="section-title text-center">GET IN TOUCH</h1>
                            <div class="section-title-border mt-3"></div>
                            <p class="section-subtitle text-muted text-center pt-4 font-secondary">We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results.</p>
                        </div>
                    </div>
                    <div class="row"><div class="col-lg-4">
                        <div class="mt-4 pt-4">
                            <p><span class="h5">Office Address 1:</span><br />
                                <span class="text-muted d-block mt-2">4461 Cedar Street Moro, AR 72368</span>
                            </p>
                            <p class="mt-4"><span class="h5">Office Address 2:</span><br />
                                <span class="text-muted d-block mt-2">2467 Swick Hill Street<br />New Orleans, LA 70171</span></p>
                            <p class="mt-4"><span class="h5">Working Hours:</span><br /> <span class="text-muted d-block mt-2">9:00AM To 6:00PM</span>
                            </p>
                        </div>
                    </div>
                        <div class="col-lg-8">
                            <div class="custom-form mt-4 pt-4">
                                <form name="myForm"><p id="error-msg"></p>
                                    <div id="simple-msg"></div><div class="row">
                                        <div class="col-lg-6"><div class="form-group mt-2">
                                            <input name="name" id="name" type="text" class="form-control" placeholder="Your name*" />
                                        </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group mt-2">
                                                <input name="email" id="email" type="email" class="form-control" placeholder="Your email*" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group mt-2">
                                                <input type="text" class="form-control" id="subject" name="subject" placeholder="Your Subject.." />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group mt-2">
                                                <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Your message...">
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 text-end">
                                            <input type="submit" id="submit" name="send" class="submitBnt btn btn-danger     /" value="Send Message" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-social bg-light">
                <div class="container">
                    <div class="align-items-center row">
                        <div class="col-lg-6">
                            <ul class="list-inline social mt-4">
                                <li class="list-inline-item"><a class="social-icon" href="/"><i class="mdi mdi-facebook"></i></a></li>
                                <li class="list-inline-item"><a class="social-icon" href="/"><i class="mdi mdi-twitter"></i></a></li>
                                <li class="list-inline-item"><a class="social-icon" href="/"><i class="mdi mdi-linkedin"></i></a></li>
                                <li class="list-inline-item"><a class="social-icon" href="/"><i class="mdi mdi-google-plus"></i></a></li>
                                <li class="list-inline-item"><a class="social-icon" href="/"><i class="mdi mdi-microsoft-xbox"></i></a></li>
                            </ul></div>
                        <div class="mt-4 col-lg-3">
                            <p class="contact-title">

                                <i class="pe-7s-call"></i> &nbsp;+91 123 4556 789</p>
                        </div>
                        <div class="mt-4 text-end col-lg-3">
                            <p class="contact-title"><i class="pe-7s-mail-open"></i>&nbsp; Support@info.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default form;