import React from 'react'
import { Card, CardBody, Row } from 'reactstrap'
import * as Yup from 'yup';
import { Colxx } from '../../../assets/styles/customStyles';

const FinalDetails = () => {

    //retrieving data for displaying 

    const savedData = JSON.parse(localStorage.getItem('basicDetails'));


    return (
        <div>

            <Card className='shadow-lg'>
                <CardBody>
                    <h3 className='d-flex justify-content-center mt-2' style={{ color: 'ThreeDShadow' }}>Overview</h3>
                    <Row>
                        <Colxx lg={6}>
                            <div className="form-floating mb-3">
                                <input type="text" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.name || ''} />
                                <label htmlFor="floatingPlaintextInput">Name:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="mobile" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.mobile || ''} />
                                <label htmlFor="floatingPlaintextInput">Mobile:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.qualification || ''} />
                                <label htmlFor="floatingPlaintextInput">Qualification:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.city || ''} />
                                <label htmlFor="floatingPlaintextInput">City:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.document || '___'} />
                                <label htmlFor="floatingPlaintextInput">Document Submitted:</label>
                            </div>
                        </Colxx>
                        <Colxx lg={6}>
                            <div className="form-floating mb-3">
                                <input type="text" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.address || ''} />
                                <label htmlFor="floatingPlaintextInput">Address:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.email || ''} />
                                <label htmlFor="floatingPlaintextInput">Email:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.street || ''} />
                                <label htmlFor="floatingPlaintextInput">Street:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.services || ''} />
                                <label htmlFor="floatingPlaintextInput">Service:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" readOnly className="form-control-plaintext" id="floatingPlaintextInput" value={savedData?.intakes || ''} />
                                <label htmlFor="floatingPlaintextInput">Intake:</label>
                            </div>
                        </Colxx>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default FinalDetails