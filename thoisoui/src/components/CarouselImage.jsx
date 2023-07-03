import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { instance } from '../config/axiosConfig'

function CarouselImage(props) {
  const {idInfo} = props

const [data,setData] = useState([])

useEffect(()=>{
    instance.get(`/Product/AdminGetById/${idInfo}`)
    .then( rs => setData(rs.data.product.images))
},[])

  return (
      <div class="slider">
        <div>
          {
            data.map((_,i)=>
              <a  href={'#slide-'+Number(i+1)}>{i+1}</a>
            )
          }

       
        </div>


  <div class="slides">
    {
      data.map((v,i) => 
        <div key={v.id} id={"slide-"+ Number(i+1)}>
        <img src={v.url} alt=''/>
    </div>
        )
    }
    
    
  </div>
</div>
  )
}

export default CarouselImage
