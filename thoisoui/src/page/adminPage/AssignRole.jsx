import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import TableSearch from '../../components/TableSearch'
import { instance } from '../../config/axiosConfig'
const readOnly = [
  true,
  false,
  false,
  false,
  false
  
]
const buttonActive = [true,false,false,true]
const types = [
  'string',
  'string',
  
]
const initValues = {
  id : '',
  avatarUrl : '',
  username : "",
  email: '',
  
}
const lable = [
  "User id","Username"
]

const actions = {
  getUserByRole: '/Roles/getUserByRole?roleId=',
  getByID: '/Roles/getById?id=',
  editUserRole: '/Roles/EditUserRole?roleId='
}
function AssignRole() {
  const [addRole,setAddRole] = useState(false)
  const [roleId,setRoleId] = useState(0)
  const [data,setData] = useState([])
  const [value,setValue] = useState([])
  const [reload,setReload] = useState(false)
  const [userId,userName,isSelected] = value
  const  valueAction = {userId,userName,isSelected}
  useEffect(()=> { 
   
    if (addRole){
      instance.get(`${actions.getUserByRole}${roleId}`)
      .then( rs => {
        let temp = new Array()
        
        rs.data.map(({userId,userName,isSelected}) => {
  
  
          
           temp.push({
            userId,
            userName,
            isSelected
          })
        })
        setData(temp)
      }
        )
        .catch( e => console.log(e))
    }
    else{
      instance.get(`${actions.getByID}${roleId}`)
      .then( rs => {
        let temp = new Array()
        
        rs.data.map(({users}) => {
          
          let {userId,userName,isSelected} = users
  
          if(!isSelected){ 
          
           temp.push({
            userId,
            userName,
          })} 
        })
        setData(temp)
      }
        )
        .catch( e => console.log(e))
    }

  },[reload,roleId,addRole])
  const setReloaded = () => setReload(!reload)
  const setRole = (id) => setRoleId(id)
  const setAddRole1 = () => setAddRole(!addRole)
return (
 <TableSearch roleId={roleId} addRole={addRole} setAddRole={setAddRole1}  setRoleId = {setRole} lable={lable} buttonActive={buttonActive}  data={data} value={value} reload={reload} setReloaded={setReloaded} initValues={initValues} setValue={setValue} valueAction={valueAction}  actions = {actions} readOnly= {readOnly} types={types} />
)
}

export default AssignRole
