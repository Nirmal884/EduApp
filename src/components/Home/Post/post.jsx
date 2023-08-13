import React from 'react'
import Navbar from '../../constants/navbar'
import { Card, CardBody, Row } from 'reactstrap'
import { Colxx } from '../../../assets/styles/customStyles'
import { dataArray } from './postData'

const Post = () => {
    return (
        <>
            {/* navbar component */}
            <Navbar />
            {/* display data */}

            <Card className='shadow-lg mt-5'>
                <CardBody>
                    <ul className="list-group">
                        {dataArray?.map((item) => (
                            <>
                                <li className="list-group-item">
                                    <Row>
                                        <Colxx lg='1'>
                                            <img src={item.image} className="img-thumbnail rounded-circle avatar" alt="..." />
                                        </Colxx>
                                        <Colxx lg='11'>
                                            <h6>{item.name}</h6><span>{item.label}</span><br />
                                            <span className='text-muted'>{item.time}</span>
                                        </Colxx>
                                    </Row>
                                </li>
                            </>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </>
    )
}

export default Post