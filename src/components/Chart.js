import { Line } from '@ant-design/charts';
import React from 'react'

function Chart({ sortedTransactions}) {
    const data = sortedTransactions.map((item)=>{
        return {date : item.date , amount:item.amount};
    })
    const config={
        data,
        weight :800,
        height :400,
        autofill : false,
        xField: 'date',
    yField: 'amount',
   point : {
    size : 5,
    shape : "diamond"  
 },
    label:{
        style : {
            fill: "#aaa",
        },
    },
    }    
    let chart;
  return (
    <div><Line {...config} onReady={(chartInstance)=>(Chart=chartInstance)}/></div>
  )
}

export default Chart