import './App.css'
import './assets/styles/styles.css'
import Login from './components/Login/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/signup';
import Index from './components/Home/home';
import Notification from './components/Home/Notification/notification';
import Post from './components/Home/Post/post';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Index/>} />
        <Route path="/post" element={<Notification/>} />
        <Route path="/notification" element={<Post/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
