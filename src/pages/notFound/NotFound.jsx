import React from 'react'
import { Link } from "react-router-dom";
import './notFound.css'
const NotFound = () => {
  return (
    <h1>Page Not Found:</h1>
    <Link to={path} className="btn sm"> Go to Homepage </Link>
    
  )
}

export default NotFound
