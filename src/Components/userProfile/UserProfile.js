import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext'
import Header from '../Header/Header'
import './UserProfile.css'

function UserProfile() {

  const [hi,setHi] = useState()
  const {firebase} = useContext(FirebaseContext)

  const {user} =  useContext(AuthContext)

  
    useEffect(()=>{


      const u = user.uid

      firebase.firestore().collection('users').where("id","==",u).get().then((response)=>{
        response.forEach(element => {
          setHi(element.data())
        })
       
      })

    },[])
   
  return (
   <div>

<Header />

     
         <card>
         <input type="text" />
        <div className="centerDiv">

          
          <img alt="photo"></img>
        
            {hi &&  <h3>{hi.name}</h3>}
            <br />
            {hi && <h3>{hi.Phone}</h3>  }
            <br />
          
        </div>
      </card>
    
   </div>
  )
}

export default UserProfile
