import React,{useState} from 'react'
import obj from '../assets/img/objectiveabout.JPG';
import faculties from './faculty-data';


const About = () => {
    const [faculty]=useState(faculties());
    return (
        <div className="about">
            <div data-aos="fade-up" className="breadcrumb py-5 mb-3">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-6">
                            <h2>About</h2>
                        </div>
                        <div className="col-6 text-right">
                            <h6 className="mt-2">Home / About</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className="sec-1 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-0 px-5 pb-5 ">
                            <img src={obj} className="w-100" alt="objective"/>
                        </div>
                        <div className="col-md-6 mt-3">
                            <h3>Our Mission</h3>
                            <hr className="ml-0"/>
                            <ul className="">
                                <li><span>To develop Intellectual excellence and creativity.</span></li>
                                <li><span>To provide adequate facilities for postgraduate study and research.</span></li>
                                <li><span>To improve utilization of available resources.</span></li>
                                <li><span>To provide necessary strength to enable the students to become innovative Entrepreneurs</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-down"  className="sec-2 mt-2">
                <div className="container d-md-block d-none">
                    <h3 className="text-center">Highlights</h3>
                    <hr className="mb-5" />
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>MSc Computer Technology started in the year 1997</li>                                
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>The nomenclature of M.Sc(Software Engineering) is changed as M.Sc(Software Systems) in the academic year 2014-2015</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>MSc Software Engineering (Integrated – 5 Years) started in the year 1998</li>                                
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Organized one Short Term Training Programmes (STTP) sponsored by AICTE-ISTE, New Delhi</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>MSc Information Technology started in the year 2003</li>                                
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Conducted three Staff Development Programmes (SDP) sponsored by AICTE, New Delhi</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>MSc Software Engineering (2 Years) started in the year 2007</li>                                
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Generated an amount of Rs.15 lakhs through Training and Consultancy Work</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container d-md-none d-block desktop">
                    <h3 className="text-center">Highlights</h3>
                    <hr className="mb-5" />
                    <div className="row">
                        <div className="col">
                            <ul className="">
                                <li>MSc Computer Technology started in the year 1997</li>
                                <li>MSc Software Engineering (Integrated – 5 Years) started in the year 1998</li>
                                <li>MSc Information Technology started in the year 2003</li>
                                <li>MSc Software Engineering (2 Years) started in the year 2007</li>
                                <li>The nomenclature of M.Sc(Software Engineering) is changed as M.Sc(Software Systems) in the academic year 2014-2015</li>
                                <li>Organized one Short Term Training Programmes (STTP) sponsored by AICTE-ISTE, New Delhi</li>
                                <li>Conducted three Staff Development Programmes (SDP) sponsored by AICTE, New Delhi</li>
                                <li>Generated an amount of Rs.15 lakhs through Training and Consultancy Work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-down-right" className="sec-3 mt-5">
                <div className="container">
                    <h3 className="text-center">HOD Profile</h3>
                    <hr className="mb-5" />
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <img className="w-100 pt-0 px-3 pb-5" src="https://sites.google.com/a/kongu.edu/dr-p-balasubramanie-ctpg/_/rsrc/1453544717027/home/photo-Dr.P.B.JPG" alt="hod"/>
                        </div>
                        <div className="col-md-8">
                            <h2>Dr P Balasubramanie</h2>
                            <h6 className="mt-1">Head of the Department</h6>
                            <p className="text-justify mt-3">
                            Dr.P.Balasubramanie completed his Full time PhD degree in the year 1996 and Joined Kongu Engineering College in the year 1999. He has completed 24 years  of dedicated service  in the Engineering Colleges. He is heading the department of Computer Technology- PG (offering M.Sc – 5 years integrated programme) since July 2014.  He has published 225 research articles in international journals. He has authored 11 books and three of the books published are used as text/reference books of the many leading Universities in India. He is recipient of 17 awards. He is the approved research supervisor of Anna University and guided 30 PhD Scholars and guiding 7 research scholars. He has successfully completed 2 research projects as a principal investigator. He has received a funding 0f 13 Lakh from various funding agencies like AICTE, DST, CSIR, DRDO and so on and organized 21 seminar/workshops/SDPs/STTPs for the benefit of students, faculty members and research scholars. His field interest includes optimization algorithms and machine learning.
                            </p>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="sec-4 mt-5">
                <div className="container">
                    <h3 className="text-center">Our Faculty</h3>
                    <hr className="mb-5" />
                    <div className="row">
                        {faculty.map((fac,key)=>(
                            <div data-aos="zoom-in" className="col-lg-4 col-sm-6 mb-5">
                                <div className="row d-flex align-items-center">
                                <div className="col-5 avatar w-100 d-flex justify-content-center align-items-center">
                                    <img
                                    src={fac.image}
                                    className="img-fluid w-75 rounded-circle z-depth-1"
                                    alt="staff"
                                    />
                                </div>
                                <div className="col-7">
                                    <h6 className="font-weight-bold pt-2"><a href={fac.link}>{fac.name}</a></h6>
                                    <p className="text-muted">
                                    {fac.designation}
                                    </p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
