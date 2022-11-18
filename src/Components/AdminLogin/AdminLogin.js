import React from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './AdminLogin.css'
function AdminLogin() {
  return (
    <section>
            <form>
                <div className="admin">
                            <button type="button" className="admin-lock"><i className="fa fa-arrow-right"></i></button>

                            <div className="admin-content">
                                <h2 className="admin-content-header">Admin area</h2>

                                        <div className="form">
                                        <input type="text" className="form-input" placeholder="Login"/>
                                        <input type="password" className="form-input" placeholder="Password"/>
                                        </div>

                            </div>
                </div>
            </form>
    </section>
  )
}

export default AdminLogin
