import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardTitle, Row } from 'reactstrap'
import { Colxx } from '../../assets/styles/customStyles'
import Course from './course'
import Navbar from '../constants/navbar'
import { homeData } from './homeData'

const Index = () => {
  return (
    <>
      
      <Navbar/>

      {/* user section */}
      <Row className='mt-5'>
      {homeData?.map((data,index)=>(
      <Colxx lg={4} key={index}>
        <Card className='shadow-lg'>
          <CardBody>
            <CardHeader>
              <Row>
                <div className="col">
                  <img src={data?.avatar} className="img-thumbnail rounded-circle avatar" alt="..." />
                </div>
                <div className="col align-center">
                  {data?.name} <br />
                  <span className='text-muted'>{data?.uId}</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-success">{data.status}</span>
                </div>
              </Row>
            </CardHeader>
            <CardTitle>
              <Row>
                <Colxx lg={2}>
                  <i className="bi bi-telephone"></i>
                </Colxx>
                <Colxx sm={10}>
                  {data.mobile}
                </Colxx>
              </Row>
              <Row>
                <Colxx lg={2}>
                  <i className="bi bi-envelope-open"></i>
                </Colxx>
                <Colxx sm={10}>
                  {data.email}
                </Colxx>
              </Row>
              <Row>
                <Colxx lg={2}>
                  <i className="bi bi-mortarboard-fill"></i>
                </Colxx>
                <Colxx sm={10}>
                  {data.education}
                </Colxx>
              </Row>
            </CardTitle>
            <CardFooter>
              <Row>
                <Colxx lg={8}>
                  {data.progress}
                </Colxx>
                <Colxx lg={4}>
                  <img src='https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' className="img-thumbnail rounded-circle avatar" alt="..." />
                </Colxx>
              </Row>
            </CardFooter>
          </CardBody>
        </Card>
      </Colxx>
      ))}
    </Row>
      
      <div className="mt-5">
        <Course />
      </div>
    </>
  )
}

export default Index