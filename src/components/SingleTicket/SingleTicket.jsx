import React from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCircle } from "react-icons/fa";

const SingleTicket = ({ticket,taskList,handleTaskList}) => {

    const isTaskExist =taskList.some(task=> task.id ===ticket.id) 
    return (
        <div onClick={()=>handleTaskList(ticket)} className="card card-border bg-base-100  shadow-2xl">
                    <div className="card-body space-y-5">
                        <div className='flex justify-between items-center'>
                            <h2 className="card-title font-bold">{ticket.title}</h2>
                            <span className={`"badge flex items-center gap-1 py-1 px-2 rounded-xl font-medium" ${isTaskExist? "bg-amber-400 text-amber-800" : "bg-green-400 text-green-700"}`}><span ><FaCircle />
                            </span>
                              {
                                isTaskExist? "In Progress" : "Open"
                              }
                            </span>
                        </div>
                        <p className='text-[#627382] font-medium'>{ticket.description}</p>
                        <div className="card-actions flex justify-between">
                            <span className='text-[#627382] font-medium'>{ticket.id}</span>
                            <span className={`'text-[#F83044] font-medium font-semibold'
                                   ${ticket.priority==="High"? "text-red-600" 
                                    : ticket.priority==="Medium"? "text-amber-600"
                                    :   "text-green-600"
                                
                                }
                                `}>{ticket.priority.toUpperCase()} PRIORITY</span>
                            <span className='text-[#627382] font-medium'>{ticket.customer}</span>
                            <span className='flex gap-2 items-center text-[#627382] font-medium'><span><SlCalender /></span>{ticket.createdAt}</span>
                        </div>
                    </div>
                </div>
    );
};

export default SingleTicket;