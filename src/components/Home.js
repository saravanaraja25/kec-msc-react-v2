import React from 'react'
import objective from '../assets/img/objectivehome.JPG'

const Home = () => {
    return (
        <div className="home">
            <div className="sec-1 py-5">
                <div className="container">
                    Hello
                </div>
            </div>
            <div className="sec-2 mt-4">
                <div className="container">
                    <h3 className="text-center">Objective</h3>
                    <hr className="text-center"/>
                    <div className="row mt-5">
                        <div className="col-md-6 mb-3">
                            <img className="w-100" src={objective} alt="objective"/>
                        </div>
                        <div className="col-md-6">
                            <h4>Department of CT-PG</h4>
                            <p className="text-justify">The Department of Computer Technology (PG) is committed to generate Competent Professionals to become part of the Industry and Research Organizations at the National and International levels. Apart from specialized technical knowledge and skills, the programme conducted by the Department aims to develop all round personality by inculcating human values, honesty, sincerity, team spirit and work culture.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-3">
                <div className="container mb-4 mt-4">
                    <div className="text-center">
                        <h2>Call For Admission-60 Seats Only</h2>
                        <h4>Call - 9443942365 (HOD) </h4>
                    </div>
                </div>
            </div>
            <div className="sec-4 mb-4">
                <div className="container mt-4">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col-md-4 mb-3">
                            <div data-aos="flip-left" className="card card-img">
                                <div className="text-white text-center d-flex align-items-center single text-dark py-5 px-4">
                                    <div className="w-100">
                                        <i className="fas fa-users mb-1"></i>
                                        <h4>Total Seats Per Year</h4>
                                        <h2>60</h2>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="col-md-4 mb-3">
                            <div data-aos="flip-right" className="card card-img">
                                <div className="text-white text-center d-flex align-items-center single text-dark py-5 px-4">
                                    <div className="w-100">
                                        <i className="fas fa-chalkboard-teacher mb-1"></i>
                                        <h4>Total Faculty</h4>
                                        <h2>15</h2>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="col-md-4 mb-3">
                            <div data-aos="flip-up" className="card card-img">
                                <div className="text-white text-center d-flex align-items-center single text-dark py-5 px-4">
                                    <div className="w-100">
                                        <i className="fas fa-user-graduate mb-1"></i>
                                        <h4>Total Students</h4>
                                        <h2>300+</h2>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
