import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import objective from '../assets/img/objectivehome.JPG'
import testi1 from '../assets/img/testi1.jpeg'
import testi2 from '../assets/img/testi-2.jpeg'
import tcs from '../assets/img/tcs-logo.png'
import coda from '../assets/img/coda-logo.png'
import firstqa from '../assets/img/firstqa-logo.svg'
import cts from '../assets/img/cts-logo.svg'
import {Card,CardColumns} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Poster from './Poster';
import post from '../assets/img/poster.jpeg'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Home = () => {
    return (
        <div className="home">
            <Poster src={post}/>
            <div data-aos="fade-up" className="sec-1 py-5">
                <div className="sec1-1 p-0 m-0">
                </div>
    
                <div className="text-center text-white mt-5 mb-4">
                    <h1>Department of CT-PG</h1>
                    <h2 className="mt-3">M.Sc Software Systems (5 Years Integrated)</h2>
                    <h2 className="mt-3">Eligibility : HSC</h2>
                </div>
                <div className="container">
                    <CardColumns>
                        <Card className="c1">
                            <Card.Body>
                                <Card.Title>About Us</Card.Title>
                                <Card.Text>
                                    <Link to="/about" exact >Click Here To View</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="c2">
                            <Card.Body>
                                <Card.Title>Curriculum</Card.Title>
                                <Card.Text>
                                    <Link to="/curriculum" exact >Click Here To View</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="c3">
                            <Card.Body>
                                <Card.Title>Placements</Card.Title>
                                <Card.Text>
                                    <Link to="/placement" exact >Click Here To View</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </div>

            </div>
            <div data-aos="fade-up" className="sec-2 mt-4">
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
            <div  data-aos="fade-right" className="sec-3">
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
            <div className="sec-5 mb-5">
                <div className="container mt-4">
                    <h3 className="text-center">Testimonials</h3>
                    <hr className="text-center mb-5"/>
                    <Swiper
                        data-aos="zoom-in"
                        slidesPerView={1}
                        autoplay
                        spaceBetween={50}                        
                        breakpoints={{
                            // when window width is >= 640px
                            768: {
                            slidesPerView: 2,
                            },
                        }}           
                    >
                        <SwiperSlide>
                            <div className="card testimonial-card">                                
                                <div className="avatar d-flex justify-content-center white">
                                    <img src={testi1} height="120" width="120" className="mt-3 rounded" alt="testi1"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">Kasthuri</h4>
                                    <h5 className="text-center">Application Security Specialist</h5>
                                    <h6 className="text-center">Cognizant</h6>
                                    <hr />
                                    <p className="text-justify"><i className="fas fa-quote-left"></i> I had the privilege of studying the best course in one of the esteemed institutions. My course laid a strong foundation to the software engineering expertise that I possess today. Experienced staffs, well-designed curriculum and excellent placement training has made many successful IT professionals and entrepreneurs. I would proudly say that I am an alumni of KEC CT - PG.
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>  
                        <SwiperSlide>
                            <div className="card testimonial-card">                               
                                <div className="avatar d-flex justify-content-center white">
                                    <img src={testi2} height="120" width="120" className="mt-3 rounded" alt="testi2"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">Arunrajkumar Mohanasamy </h4>
                                    <h5 className="text-center">Consulting Technical Manager</h5>
                                    <h6 className="text-center">Oracle Financial Services Software Limited</h6>
                                    <hr />
                                    <p className="text-justify"><i className="fas fa-quote-left"></i> The Master's program in Software engineering prepares a student optimally for a career in one of the most important domains of the corporate world.  This course provides solid theoretical foundation on analytical and programming skills, also gives way to learn how to select the appropriate tools, processes, and algorithms for a variety of practical tasks.
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>         
                    </Swiper>
                </div>
            </div>
            <div data-aos="fade-in-up" className="sec-6">
                <div className="container mb-5">
                    <h3 className="text-center">Our Recruiters</h3>
                    <hr className="text-center mb-5"/>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={4}
                        autoplay                                           
                        height={40}                
                    >
                        <SwiperSlide><img className="w-100" src={tcs} alt="tcs"/></SwiperSlide>
                        <SwiperSlide><img className="w-100" src={firstqa} alt="cts"/></SwiperSlide>    
                        <SwiperSlide><img className="w-100" src={coda} alt="coda"/></SwiperSlide>
                        <SwiperSlide><img className="w-100 mt-md-3" src={cts} alt="cts"/></SwiperSlide> 
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Home
