import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'

const Poster = ({src}) => {
    const [show, setShow] = useState(true);
    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="lg"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img className="w-100" src={src} alt="poster"/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Poster
