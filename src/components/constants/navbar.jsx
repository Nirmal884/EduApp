import React from 'react'
import { auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'

const Navbar = () => {

  //for navigating to login page
  const navigate = useNavigate()

  //sign out from the app
  const logOut = async () => {
    await signOut(auth)
    navigate('/')

  }
  return (
    <div className='sticky-top nav mt-3 d-flex justify-content-center'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" className="img-thumbnail border-0 rounded-circle avatar" alt="..." />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
              <a className="nav-link" href="/post">Post</a>
              <a className="nav-link" href="/notification">Notification</a>
            </div>
          </div>
          <div>
            <i className="bi bi-box-arrow-right" style={{ fontSize: "1.4rem", cursor: 'pointer' }} onClick={logOut}></i>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar