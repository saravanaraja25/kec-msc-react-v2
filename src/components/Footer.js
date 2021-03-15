import React from 'react'

const Footer = () => {
    const footerstyle={
        textAlign:"justify"
    };
    return (
        <div className="footer">
            <div className="top">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h4 className="title">Kongu Engineering College</h4><hr className="ml-0"/>
                            <p style={footerstyle} className="mt-4" >
                                Kongu Engineering College is an autonomous engineering college located at Perundurai, Erode district in the state of Tamil Nadu in India. It is affiliated to Anna University and accredited 'A' Grade by National Assessment and Accreditation Council.
                            </p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h4 className="title">Department of CT-PG</h4><hr className="ml-0"/>
                            <p style={footerstyle} className="mt-4" >
                            The Department of Computer Technology (PG) is committed to generate Competent Professionals to become part of the Industry and Research Organizations at the National and International levels. Apart from specialized technical knowledge and skills, the programme conducted by the Department aims to develop all round personality by inculcating human values, honesty, sincerity, team spirit and work culture.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="title">Address</h4><hr className="ml-0"/>
                            <div className=" d-flex mt-4 mb-2">
                                <i className="fas fa-map-marker-alt mr-2 mt-1 white-text"></i>
                                <p className="text-white text-left">Department of CT-PG,MBA/MCA Block,Kongu Engineering College Perundurai-638052.</p>
                            </div>
                            <div className=" d-flex mb-2">
                                <i className="fas fa-phone mr-2 mt-1 white-text"></i>
                                <p className="text-white">+91 9443942365</p>
                            </div>
                            <div className=" d-flex">
                                <i className="fas fa-envelope mr-2 mt-1 white-text"></i>
                                <p className="text-white">balu_p.ctpg@kongu.edu</p>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
            <div className="bottom text-center">
                <div className="container">
                    &copy; {new Date().getFullYear()} Copyright Department of CT-PG. 
                    {/* Designed By <a href="https://saravanaraja.xyz"> Saravana Raja </a> */}
                </div>
            </div>
        </div>
    )
}

export default Footer
