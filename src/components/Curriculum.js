import React from 'react'

const Curriculum = () => {
    return (
        <div className="curriculum mb-5">
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
                        <h5><a target="_blank" rel="noreferrer" href="http://coe.kongu.edu/Regulations/2014/MSCSyllabus2014/R2014-MSc-I-X%20Sem-Curriculum%20and%20Syllabi.pdf">Click Here To View</a></h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h3>Curriculum - 2018</h3>
                        <hr className="ml-0 mb-3" />
                        <h5><a target="_blank" rel="noreferrer" href="#">Click Here To View</a></h5>
                    </div>
                    <div className="col-md-4">
                        <h3>Curriculum - 2020</h3>
                        <hr className="ml-0 mb-3" />
                        <h5><a target="_blank" rel="noreferrer" href="http://coe.kongu.edu/Regulations/2020/PGSyllabus2020/R2020-MSC.pdf">Click Here To View</a></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum
