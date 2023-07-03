import React from 'react'
import BarChartCustom from '../../components/BarChartCustom'
import DashBoardCard from '../../components/DashBoardCard'
import PieChartSingle from '../../components/PieChartSingle'
import TableStatistic from '../../components/TableStatistic'

const data = [{
  id: '111',
  name: "Fuck",
  age: 18,
  count: 100,
  links: ''
},
{
  id: '111',
  name: "Fuck",
  age: 18,
  count: 100,
  links: ''
},
{
  id: '111',
  name: "Fuck",
  age: 18,
  count: 100,
  links: ''
},
{
  id: '111',
  name: "Fuck",
  age: 18,
  count: 100,
  links: ''
}]
const lable = ["ID",'Name','Age',"Count Of Post", 'More']

function PostStatistic() {
  return (
   <>
      <DashBoardCard />
   <div className='chart-side'>
    <div className='chart-side-1'>
    <BarChartCustom nameChart='Frequency Post' />
    </div>
    <div className='chart-side-2'>
    <PieChartSingle nameChart='Post vs Non Approve' />
    </div>
   </div>
   <TableStatistic name='Top 5 Users' data={data} lables={lable}/>
   </>
  )
}

export default PostStatistic
