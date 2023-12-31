import { React } from 'react'
import './App.css'
import VideoReady from './components/VideoReady';
import HowItWorks from './components/HowItWorks';
import VideoRepo from './components/VideoRepo';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<VideoReady />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/login' element={<Login />} />
        <Route path='/video-repo' element={<VideoRepo />} />
      </Routes>
    </Router>
  )
}


export default App
