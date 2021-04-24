import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'

const Poster = ({src}) => {
    const [show, setShow] = useState(true);
    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w w-100"
                aria-labelledby="example-custom-modal-styling-title"
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
