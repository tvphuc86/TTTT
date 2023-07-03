import React from 'react'

function TableStatistic(props) {
    const {name,data,lables,filter} = props
  return (
   <>
   <div className='table-statistic'>
    <div className='header-table-statistic'>
    <h3>{name}</h3>
    <div className='search-group'>
    <input type={'search'} placeholder='Search' />
    <i className='fas fa-search'></i>
    </div>
    <select>
        <option>
            This week
        </option>
        <option>
            This month
        </option>
    </select>
    </div>
    <div className="table">
    <table>
            <thead>
                <tr>
                    {lables.map((lable,index) => 
                    <th>
                        {lable}
                    </th>)}
                </tr>
            </thead>
            <tbody>
            {data.map((data,index) => 
                    <tr>
                       
                          {Object.values(data).map((element,index) => 
                            index === Object.values(data).length -1 ?<td> <i className='fas fa-info'></i></td> :   <td>{element}</td>
                          
                          )}
                    </tr>)}
            </tbody>
        </table>
    </div>
       
   </div>
   </>
  )
}

export default TableStatistic
