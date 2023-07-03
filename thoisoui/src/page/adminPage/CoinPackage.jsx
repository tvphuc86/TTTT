import React from 'react'
import CarouselImage from '../../components/CarouselImage'
import FileReview from '../../components/FileReview'
import TableSearch from '../../components/TableSearch'
const data = [
    {
        id: 'pk1',
        packageName: 'Name 1',
        packageValue: 20000,
        valueUnit:'vnd',
        coinAmout: 2,
        description:'description 1',
        status:0
    },
    {
        id: 'pk2',
        packageName: 'Name 2',
        packageValue: 30000,
        valueUnit:'vnd',
        coinAmout: 5,
        description:'description 2',
        status:1
    }
    ]
    const readOnly = [
      true,false,false,false,false,false,true
    ]
    const initValues = {
      Id: '',
      packageName: '',
      packageValue: 0,
      valueUnit:'',
      coinAmout: 0,
      description:'',
      status:0
    }
    const types = [
      "string",
      "string",
      "number",
      "string",
      "number",
      "string",
      'number'
  
    ]
    const lable = [
        "ID","Package Name","Package value","Value Unit","Coin Amount","Desscription","Status"
    ]
function CoinPackage() {
  return (
    <>
        <TableSearch lable={lable} data={data} readOnly= {readOnly} types={types} initValues={initValues}/>
    </>

  )
}

export default CoinPackage
