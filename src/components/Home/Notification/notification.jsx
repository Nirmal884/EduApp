import React, { useState } from 'react'
import { Colxx } from '../../../assets/styles/customStyles'
import Navbar from '../../constants/navbar'
import { dataArray } from './notificationData'
import Comment from './Comment'
import useNode from '../../../hooks/useNode'
import { Row } from 'reactstrap'

const comments = {
    id: 1,
    items: [],
  };

const Notification = () => {

    // const [replay, setReplay] = useState()
    // const [post, setPost] = useState()
    const [count, setCount] = useState(0)
    const [commentsData, setCommentsData] = useState(comments);

    //custom hook for handling the edit delete and create 

    const { insertNode, editNode, deleteNode } = useNode();

    const handleInsertNode = (folderId, item) => {
        const finalStructure = insertNode(commentsData, folderId, item);
        setCommentsData(finalStructure);
      };
    
      const handleEditNode = (folderId, value) => {
        const finalStructure = editNode(commentsData, folderId, value);
        setCommentsData(finalStructure);
      };
    
      const handleDeleteNode = (folderId) => {
        const finalStructure = deleteNode(commentsData, folderId);
        const temp = { ...finalStructure };
        setCommentsData(temp);
      };

    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                {dataArray?.map((data) => {
                    return (
                        <>
                            <Row>
                                <Colxx lg={1}>
                                    <img src={data?.image} className="img-thumbnail rounded-circle avatar" alt="..." />
                                </Colxx>
                                <Colxx lg={11}>
                                    {data?.name}<br />
                                    <span className="text-muted">{data?.time}days ago</span>
                                </Colxx>
                            </Row>
                            <Row className='mt-3'>
                                <div>
                                    {data?.description}
                                </div>
                            </Row>
                            <Row className='mt-3 '>
                                <img src={data?.postImage} className='img-fluid img-thumbnail post' alt="Post" />

                                <Colxx lg={1} sm={1} md={1}>
                                    <i className="bi bi-heart" onClick={() => { setCount(count + 1) }}>{data?.like} Likes</i>
                                </Colxx>
                                <Colxx lg={2} sm={1} md={1}>
                                    <i className="bi bi-chat">{data?.comment} comments</i>
                                </Colxx>
                            </Row>
                            {/* <Row className='mt-2'>
                                <div>
                                    <textarea className='full-width-textarea' name="" id="" cols="" rows="2" placeholder='Add a comment...'></textarea>
                                    <Button>Post</Button>
                                </div>
                                <div className="mt-2">
                                    <p>Comments</p>
                                </div>
                            </Row> */}
                            <Comment
                                handleInsertNode={handleInsertNode}
                                handleEditNode={handleEditNode}
                                handleDeleteNode={handleDeleteNode}
                                comment={commentsData}
                            />
                            {/* <Row className='ms-4 mb-2'>
                                <Colxx lg={1}>
                                    <img src={data?.commentSection?.avatar} className="img-thumbnail rounded-circle avatar" alt="..." />
                                </Colxx>
                                <Colxx lg={11}>
                                    <Card>
                                        <CardBody>
                                            <CardDeck>
                                                <span style={{ fontSize: '20px' }}>{data?.commentSection?.who}</span> <span className='text-muted' style={{ fontSize: '12px' }}>{data?.commentSection?.day} {data?.commentSection?.duration} ago</span>
                                            </CardDeck>
                                            <CardContent>
                                                {data?.commentSection?.commentData}
                                            </CardContent>
                                            <i className="bi bi-heart-fill"></i>
                                        </CardBody>
                                    </Card>
                                    <div className='mt-1 ms-2'><span style={{ cursor: 'pointer' }} onClick={() => (setPost(!post))}>{data?.commentSection?.replay?.length} replies</span> <span onClick={() => (setReplay(!replay))} style={{ cursor: 'pointer' }} className='ms-4 text-success'>Replay</span></div>
                                    <Row className='mt-2'>
                                        {replay &&
                                            <>
                                                <Colxx lg={1}>
                                                    <img src={data?.commentSection?.replay?.replayAvatar} className="img-thumbnail rounded-circle avatar" alt="..." />
                                                </Colxx>
                                                <Colxx lg={11} className='mb-2'>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-group-text" style={{ cursor: 'pointer' }}>
                                                            <i className="bi bi-send"></i>
                                                        </span>
                                                    </div>
                                                </Colxx>
                                            </>}
                                        {post &&
                                            <>
                                                <Colxx lg={1}>
                                                    <img src={data?.commentSection?.replay?.commentReplayImg} className="img-thumbnail rounded-circle avatar" alt="..." />
                                                </Colxx>
                                                <Colxx lg={11} className='mb-2'>
                                                    <Card>
                                                        <CardBody>
                                                            <CardDeck>
                                                                <span style={{ fontSize: '20px' }}>{data?.commentSection?.replay?.replayer}</span> <span className='text-muted' style={{ fontSize: '12px' }}>1 week ago</span>
                                                            </CardDeck>
                                                            <CardContent>
                                                                {data?.commentSection?.replay?.commentReplay}
                                                            </CardContent>
                                                        </CardBody>
                                                    </Card>
                                                </Colxx>
                                                <Colxx lg={1}>
                                                    <img src={data?.commentSection?.replay?.secondReplay} className="img-thumbnail rounded-circle avatar" alt="..." />
                                                </Colxx>
                                                <Colxx lg={11}>
                                                    <Card>
                                                        <CardBody>
                                                            <CardDeck>
                                                                <span style={{ fontSize: '20px' }}>Leo</span> <span className='text-muted' style={{ fontSize: '12px' }}>1 week ago</span>
                                                            </CardDeck>
                                                            <CardContent>
                                                                Haiii@@
                                                            </CardContent>
                                                        </CardBody>
                                                    </Card>
                                                </Colxx>
                                            </>}
                                    </Row>
                                </Colxx>
                            </Row> */}
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Notification