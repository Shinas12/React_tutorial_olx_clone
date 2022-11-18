import React, { useContext, useEffect, useState } from 'react'
import { useHistory} from 'react-router-dom'

import { FirebaseContext } from '../../store/FirebaseContext'
import './AdminDashboard.css'
function AdminDashboard() {
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)
    const deleteUser =  (id)=>{
    firebase.firestore().collection('users').doc(id).delete().then(()=>{
        history.push('/adminDashboard')
    })
    }

    const EditUser = ()=>{
      history.push("/edit")
    }
    const[allusers,setAllusers] = useState([])
    useEffect(()=>{
        firebase.firestore().collection('users').get().then((snap)=>{
            console.log(snap)
          const alluser = snap.docs.map((user)=>{
            return {
                ...user.data(),
                docId:user.id

            }
 
          })
      
          setAllusers(alluser)
        })
      })

  return (
    <div>
<table className="table container col-11 m-auto">
		<thead className="thead-dark">
			<tr>
				<th scope="col">Sno.</th>
				<th scope="col">Name</th>
				
				<th scope="col">Phone</th>
                <th scope="col">Action</th>
				
				
			</tr>
		</thead>
		<tbody>
            {

                allusers.map((user,index)=>{

                  return  <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.Phone}</td>
                    


                    <td >
                    <button className='btn-danger' onClick={()=>deleteUser(user.docId)}>Delete</button> 
                    &nbsp;&nbsp;
                    <button className='btn-primary' onClick={()=>EditUser()}>Edit</button> 
                    </td>
                    </tr>

                })

                       

            }
			

  </tbody>
</table>
    </div>
  )
}

export default AdminDashboard
