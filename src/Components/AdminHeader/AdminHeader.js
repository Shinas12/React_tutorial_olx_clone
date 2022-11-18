import React,{useEffect, useState}from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./AdminHeader.css"

function AdminHeader() {
    
  return (
    <div className='header'>
        <p className='logo'>Admin</p>
        <div className='header-right'>
  
            <Link to="/adminDashboard">
                <p className='active'>
                Logout
                </p>
               
            </Link>

        </div>


      
    </div>
  )
}

export default AdminHeader
