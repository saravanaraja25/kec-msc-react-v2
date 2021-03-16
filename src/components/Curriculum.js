import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'


const Curriculum = () => {
    const [showc2014, setShowc2014] = useState(false);
    const [showc2018, setShowc2018] = useState(false);
    const [showc2020, setShowc2020] = useState(false);
    const handleClosec2014 = () => setShowc2014(false);
    const handleClosec2018 = () => setShowc2018(false);
    const handleClosec2020 = () => setShowc2020(false);
    const handleShowc2014 = () => setShowc2014(true);
    const handleShowc2018 = () => setShowc2018(true);
    const handleShowc2020 = () => setShowc2020(true);
    return (
        <div  data-aos="fade-up" className="curriculum mb-5">
            <div className="breadcrumb py-5 mb-3">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-6">
                            <h2>Curriculum</h2>
                        </div>
                        <div className="col-6 text-right">
                            <h6 className="mt-2">Home / Academics / Curriculum</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h3>Curriculum - 2014</h3>
                        <hr className="ml-0 mb-3" />
                        <Modal size="lg" show={showc2014} onHide={handleClosec2014}>
                            <Modal.Body>
                                <iframe title="cur-2014" src="https://drive.google.com/file/d/12EzQ-LWrkpNlmIi3ULQlx2Mo63gXtCq_/preview" width="100%" height="480"></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosec2014}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <h5><a href="#" onClick={handleShowc2014}>Click Here To View</a></h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h3>Curriculum - 2018</h3>
                        <hr className="ml-0 mb-3" />
                        <Modal size="lg" show={showc2018} onHide={handleClosec2018}>
                            <Modal.Body>
                                <iframe title="cur-2018" src="https://drive.google.com/file/d/1PXiBHVxYbDIvvrGD_S1pOnq1KUVZ3kfI/preview" width="100%" height="480"></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosec2018}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <h5><a href="#" onClick={handleShowc2018}>Click Here To View</a></h5>
                    </div>
                    <div className="col-md-4">
                        <h3>Curriculum - 2020</h3>
                        <hr className="ml-0 mb-3" />
                        <Modal size="lg" show={showc2020} onHide={handleClosec2020}>
                            <Modal.Body>
                                <iframe title="cur-2020" src="https://drive.google.com/file/d/1F0wVAgMD6Gmzegr2uBiJPWo0gx2XrcWx/preview" width="100%" height="480"></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosec2020}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <h5><a href="#" onClick={handleShowc2020}>Click Here To View</a></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum
