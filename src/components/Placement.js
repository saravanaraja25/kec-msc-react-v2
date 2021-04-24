import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import Poster from './Poster';
import post from '../assets/img/poster.jpeg'
const Placement = () => {
    const [showp2019, setShowp2019] = useState(false);
    const [showp2020, setShowp2020] = useState(false);
    const [showp2021, setShowp2021] = useState(false);
    const handleClosep2019 = () => setShowp2019(false);
    const handleClosep2020 = () => setShowp2020(false);
    const handleClosep2021 = () => setShowp2021(false);
    const handleShowp2019 = () => setShowp2019(true);
    const handleShowp2020 = () => setShowp2020(true);
    const handleShowp2021 = () => setShowp2021(true);
    const [showcv2019, setShowcv2019] = useState(false);
    const [showcv2020, setShowcv2020] = useState(false);
    // const [showcv2021, setShowcv2021] = useState(false);
    const handleClosecv2019 = () => setShowcv2019(false);
    const handleClosecv2020 = () => setShowcv2020(false);
    // const handleClosecv2021 = () => setShowcv2021(false);
    const handleShowcv2019 = () => setShowcv2019(true);
    const handleShowcv2020 = () => setShowcv2020(true);
    // const handleShowcv2021 = () => setShowcv2021(true);
    return (
        <div data-aos="fade-up" className="placement mb-5">
            <Poster src={post}/>
            <div className="breadcrumb py-5 mb-3">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-6">
                            <h2>Placement</h2>
                        </div>
                        <div className="col-6 text-right">
                            <h6 className="mt-2">Home / Academics / Placement</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h3>Placement - 2019</h3>
                        <hr className="ml-0 mb-3" />
                        <Modal size="lg" show={showp2019} onHide={handleClosep2019}>
                            <Modal.Body>
                                <iframe src="https://drive.google.com/file/d/1V8Mu588rOthV5uoNgWpekqWVeBhK_em7/preview" width="100%" height="480"></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosep2019}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal size="lg" show={showcv2019} onHide={handleClosecv2019}>
                            <Modal.Body>
                                <iframe src="https://drive.google.com/file/d/1JWwu_aenFtPY4t7l_dByylAczItvaDQh/preview" width="100%" height="480"></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosecv2019}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <table className="table table-striped">
                            <tbody>
                                <tr>                                
                                    <td>Students willing for Placement</td>
                                    <td>22</td>                                
                                </tr>
                                <tr>                                
                                    <td>No of Students Placed</td>
                                    <td>20</td>                                
                                </tr>    
                                <tr>                                
                                    <td>Percentage of Students Placed</td>
                                    <td>90.91%</td>                                
                                </tr>    
                                {/* <tr>                                
                                    <td>Average Salary</td>
                                    <td>3.47 Lakh Per Annum</td>                                
                                </tr>                             */}
                                 <tr>                                
                                    <td>List of Companies Visited</td>
                                    <td><a href="#" onClick={handleShowcv2019}>Click Here To View</a></td>   
                                </tr>
                                <tr>                                
                                    <td>List of Placed Students</td>
                                    <td><a href="#" onClick={handleShowp2019}>Click Here To View</a></td>                                
                                </tr>       
                            </tbody>
                        </table>     
                    </div>
                    <div className="col-md-4 mb-3">
                        <h3>Placement - 2020</h3>
                        <hr className="ml-0 mb-3" />
                        <Modal size="lg" show={showp2020} onHide={handleClosep2020}>
                            <Modal.Body>
                                <iframe src="https://drive.google.com/file/d/1NzjrlNDo_6JxPswLR9NHi_HP0sh3v7Pm/preview" width="100%" height="480"></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosep2020}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal size="lg" show={showcv2020} onHide={handleClosecv2020}>
                            <Modal.Body>
                                <iframe src="https://drive.google.com/file/d/1lUhEugMLh4nzgSV-q_GP8k2GAR0xfNtg/preview" width="100%" height="480"></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosecv2020}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <table className="table table-striped">
                            <tbody>
                                <tr>                                
                                    <td>Students willing for Placement</td>
                                    <td>21</td>                                
                                </tr>
                                <tr>                                
                                    <td>No of Students Placed</td>
                                    <td>20</td>                                
                                </tr>    
                                <tr>                                
                                    <td>Percentage of Students Placed</td>
                                    <td>95.23%</td>                                
                                </tr>    
                                <tr>                                
                                    <td>Average Salary</td>
                                    <td>3.47 Lakh Per Annum</td>                                
                                </tr>  
                                <tr>                                
                                    <td>List of Companies Visited</td>
                                    <td><a href="#" onClick={handleShowcv2020}>Click Here To View</a></td>   
                                </tr>
                                <tr>                                
                                    <td>List of Placed Students</td>
                                    <td><a href="#" onClick={handleShowp2020}>Click Here To View</a></td>    
                                </tr>                              
                            </tbody>
                        </table>     
                    </div>
                    <div className="col-md-4">
                        <h3>Placement - 2021</h3>
                        <hr className="ml-0 mb-3" />
                        <Modal size="lg" show={showp2021} onHide={handleClosep2021}>
                            <Modal.Body>
                                <iframe src="https://drive.google.com/file/d/1FI7OL5LtkxJEQHHwEJCtAXlg3HfDVhl9/preview" width="100%" height="480"></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosep2021}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <table className="table table-striped">
                            <tbody>
                                <tr>                                
                                    <td>Students willing for Placement</td>
                                    <td>35</td>                                
                                </tr>
                                <tr>                                
                                    <td>No of Students Placed</td>
                                    <td>30</td>                                
                                </tr>    
                                <tr>                                
                                    <td>Percentage of Students Placed</td>
                                    <td>85.71%(As on 20.02.2020)</td>                                
                                </tr>    
                                <tr>                                
                                    <td>Average Salary</td>
                                    <td>3.04 Lakh Per Annum</td>                                
                                </tr>   
                                {/* <tr>                                
                                    <td>List of Companies Visited</td>
                                    <td><a target="_blank" rel="noreferrer" href="http://coe.kongu.edu/Regulations/2020/PGSyllabus2020/R2020-MSC.pdf">Click Here To View</a></td>                                
                                </tr> */}
                                <tr>                                
                                    <td>List of Placed Students</td>
                                    <td><a href="#" onClick={handleShowp2021}>Click Here To View</a></td>    
                                </tr>                                 
                            </tbody>
                        </table>                                 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement
