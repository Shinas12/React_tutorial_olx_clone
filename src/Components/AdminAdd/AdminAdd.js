import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./AdminAdd.css"
function AdminAdd() {
  const[name,setName]= useState()
  const[phone,setPhone] = useState()
  const history = useHistory()
  const checkform = ()=>{
    if(!name || !phone){
      toast.error("fill the form")
    }else{
      toast.success("verygood")
    }
  }
  return (
    <div  >
         <div className="wrapper">
         <div className="container">
          <input type="text" placeholder="Username" id="username" value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="number" placeholder="Phone" id="password" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <button id="submit" onClick={checkform}>Submit</button>
          <button id='submit' onClick={()=>history.push("/adminDashboard")}>Back</button>
         
        </div>

       
      </div>
    </div>
  )
}

export default AdminAdd
