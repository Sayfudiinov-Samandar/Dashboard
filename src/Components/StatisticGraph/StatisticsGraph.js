import React from 'react'
import "./statisticsGraph.scss"
import { GraphCard, Ticket } from '../Card/Card'

export const StatisticsGraph=()=> {
    const statsGraph = [
        ["Resolved", "426"],
        ["Received", "429"],
        ["Average first response time", "33m"],
        ["Average response time", "3h 8m"],
        ["Resolution within SLA", "94%"],

    ]

  return (
   <ul className='hero__rigt-box list-group list-group-flush'>
    {
        statsGraph.map( item => <GraphCard text={item[0]} count={item[1]} />)
    }
   </ul>
  )
}


export const TicketList=()=> {
    const ticketAarray = [
        ["Waiting on Feature Request", "4238"],
        ["Awaiting Customer Response", "1005"],
        ["Awaiting Developer Fix", "914"],
        ["Pending", "281"],
    ]

  return (
   <ul className='ticket__list list-group list-group-flush'>
    {
        ticketAarray.map( item => <Ticket text={item[0]} count={item[1]} />)
    }
   </ul>
  )
}


//// Tasks

// export const TasksList=()=> {
//     const tasksAarray = [
//         ["Finish ticket update"],
//         ["Create new ticket example"],
//         ["Update ticket report"],
//     ]

//   return (
//    <ul className='ticket__list list-group list-group-flush'>
//     {
//         tasksAarray.map( item => <Ticket text={item[0]} />)
//     }
//    </ul>
//   )
// }