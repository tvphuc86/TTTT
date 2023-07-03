import React from 'react';
import { useState } from 'react'
import {  AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from 'react-icons/ai';

import { MdAdd, MdNumbers } from 'react-icons/md';
import Pagination from './Pagination';


function TableSearch(props) {
    const {lable,data,initValues,types,readOnly} = props
    const [edit,setEdit] = useState(false)
    const [add,setAdd] = useState(false)
    const [stateAll,setSateAll] = useState(false)
    const [arraySelect,setArraySelect] = useState(new Array(data.length).fill(false))
    const keys = Object.keys(initValues)
    const [values,setValues] = useState(Object.values(initValues))
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(5)
    const [totalPage,setTotalPage] = useState(1)
    const handleChangePage = (value) => {
        setPage(value);
      };
      const handleChangeLimitPage = (e) => {
        setLimit(e.target.value);
      };

    const handleSelectAll = ()=>{
        setSateAll(!stateAll)
        setAdd(false)
        stateAll ? setArraySelect(arraySelect.map(x=>x=false)) : setArraySelect(arraySelect.map(x=>x=true))
    }
    const handleChangeSelect = (data,index) =>{
            let array = arraySelect.map((array,id) => 
     
            id === Number(index)  ?  !array : array
            
           )
            setArraySelect(array)
            setValues(Object.values(data))
            setAdd(false)
    }
    const handleChangeEdit = e =>{        
        let value = values.map((value,index)=>
        value =  index === Number(e.target.name) ? e.target.value : value
        )
        setValues(value)
    }
    const handleOnsubmit = (e) => {
        e.preventDefault()
        if (values[0] === 0 || values[0] === '' ){
            console.log(values);
           alert("Add " + values[1])
        }
        else{
            alert("Edit " + values[1])
        }
    }
    const handleDelete = () =>{
        let listDelete = new Array()
        arraySelect.map((v,i) => {
            if (v===true)  listDelete.push(data[i].id) 
    })
        alert("Are you sure DELETE items have ID : " + listDelete.toString())
    }
  return (
    <>
    <div className="search-table">
      <div className='search-group'>
        <i className="icon">
          <AiOutlineSearch />
        </i>
        <input type={'search'}></input>
      </div>
      <div className='tool'>
      <button className='num' >
            <span>
                <MdNumbers className='icon' />
                12
            </span>
        </button>
        <button className='add'  onClick={()=>{setAdd(!add)
    setValues(Object.values(initValues))}}>
            <span>
                <MdAdd className='icon' />
                Add
            </span>
        </button>
       
        <button className='delete'onClick={()=>handleDelete()}>
                <AiOutlineDelete className='icon'  />
                Delete
        </button>
        <button  className='tool-select'>
                <AiOutlineEdit className='icon' />
                Edit
                <label class="switch">
                <input type="checkbox" checked={edit} disabled={stateAll} onChange={()=>{setEdit(!edit)
                setAdd(false)}}/>
                <span class="slider-button round"></span>
                </label>
                 
        </button>
      </div>
    </div>
    {add &&  <form className='form-add' onSubmit={handleOnsubmit}>
                        { keys.map((key,index) =>
                        index!==0 ?
                        <div className='form-group'>
                            <label>{lable[index]}</label>
                            <input type={types[index]} name={index} value={values[index]}
                             onChange={handleChangeEdit} readOnly={readOnly[index]}></input>
                        </div>
                        : ''
                        )}
                        <button type='submit'>Add</button>
                    </form>}
    <div className='table'>
        <table>
            <thead>
                <tr>
                    <th><input disabled={edit } checked={(stateAll || arraySelect.every(x => x===true)) ? true : false} type={'checkbox'} onClick={
                        handleSelectAll
                    }></input></th>
                    {
                        lable.map((lb,id) =>
                        <th key={id}>
                            {lb}
                        </th>)
                    }
                </tr>
            </thead>
            <tbody>
                {data.map((data,index)=>
                <>
                <tr className={arraySelect[index] ? 'trcheck' : ''} key={data.key}>
                <td> <input name={index}  checked={arraySelect[index]} type={'checkbox'} disabled={edit && arraySelect.find((x,id)=> id !== index && x===true)} onClick = {() =>
                    handleChangeSelect(data,index)
                    }
                ></input>
                </td>
                {
                    Object.values(data).map(values =>
                        <td>{values.toString()}</td>
                    )
                }
             
             
                </tr>
                { edit && arraySelect[index] &&
                <tr className={arraySelect[index] ? 'trcheck' : ''}>
                    <td colSpan={lable.length+1}>
                    <form className='form-edit' onSubmit={handleOnsubmit}>
                        { keys.map((key,index) =>
                        <div className='form-group'>
                            <label>{lable[index]}</label>
                            <input type={types[index]} name={index} value={values[index]}
                             onChange={handleChangeEdit} readOnly={readOnly[index]}></input>
                        </div>
                        )}
                        <button type='submit'>Save</button>
                    </form>
                    </td>
                </tr>
}
                </>
                )}
            </tbody>
        </table>
    </div>
    <Pagination
            page={page}
            limit={limit}
            totalPage={data.length}
            handleChangePage={handleChangePage}
            handleChangeLimitPage={handleChangeLimitPage}
            siblings={1}
          />    </>
  );
}

export default TableSearch;
