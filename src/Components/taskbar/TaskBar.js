import React from 'react'
import "./taskBar.scss";
import { Task } from '../tasks/Tasks';
import { Overview, Tickets, Ideas, Contacts, Agents, Articles, Settings, Subscription, Dashboard } from '../../Assets/images/icons/Icons';
const TaskBar = () => {
    const tasks = [
        {
            Svg:Overview,
            text:"Overview"
        },

        {
            Svg:Tickets,
            text:"Tickets"
        },
        {
            Svg:Ideas,
            text:"Ideas"
        },
        {
            Svg:Contacts,
            text:"Contacts"
        },
        {
            Svg:Agents,
            text:"Agents"
        },
        {
            Svg:Articles,
            text:"Articles"
        },
        {
            Svg:Settings,
            text:"Settings"
        },
        {
            Svg:Subscription,
            text:"Subscription"
        },
    ]
    return (
        <div className="sidebar">
            <div className="sidebar-inner">
                <Dashboard className="sidebar-logo" />
                <h2 className='sidebar-title'>Dashboard Kit</h2>
            </div>
            <ul className="sidebar-list">
                {
                    tasks.map(task => <Task Svg={task.Svg} text={task.text}/>)
                }
            </ul>
        </div>
    )
}

export default TaskBar