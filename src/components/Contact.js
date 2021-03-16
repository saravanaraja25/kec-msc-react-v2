import React from 'react'

const Contact = () => {
    return (
        <div  data-aos="fade-up" className="contact">
            <div className="breadcrumb py-5 mb-3">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-6">
                            <h2>Contact</h2>
                        </div>
                        <div className="col-6 text-right">
                            <h6 className="mt-2">Home / Contact</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-1 mt-5 mb-5">
                <div className="container">
                <div data-aos="zoom-in" id="map-container-google-1" className="z-depth-1 map-container mb-5">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.8209299715675!2d77.60756910293053!3d11.275627033797424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE2JzMyLjEiTiA3N8KwMzYnMjkuNiJF!5e1!3m2!1sen!2sin!4v1613914929994!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="row text-center">
                        <div data-aos="flip-left" className="mb-2 col-lg-4 col-md-12 mb-4 mb-md-0">
                            <i className="fas fa-map-marker-alt fa-2x blue-text"></i>
                            <p className="font-weight-bold my-3">Address</p>
                            <p className="text-muted">Department of CT-PG,MBA/MCA Block,Kongu Engineering College Perundurai-638052</p>
                        </div>
                        <div data-aos="flip-left" className=" mb-2 col-lg-4 col-md-6 mb-4 mb-md-0">
                            <i className="fas fa-phone fa-2x blue-text"></i>
                            <p className="font-weight-bold my-3">Phone number</p>
                            <p className="text-muted"> +91 9443942365</p>
                        </div>
                        <div data-aos="flip-left" className="mb-2 col-lg-4 col-md-6 mb-4 mb-md-0">
                            <i className="fas fa-envelope fa-2x blue-text"></i>
                            <p className="font-weight-bold my-3">E-mail</p>
                            <p className="text-muted">balu_p.ctpg@kongu.edu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
