import React, { use } from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCircle } from "react-icons/fa";
import SingleTicket from '../SingleTicket/SingleTicket';
import SingleTask from '../SingleTask/SingleTask';
import ResolvedTicket from '../ResolvedTicket/ResolvedTicket';

const CustomerTickets = ({ ticketsPromise ,handleTaskList,taskList ,handleCompleteButton, resolvedTicket}) => {
    const tickets = use(ticketsPromise)
    // console.log(tickets)
    return (
        <div className='mx-auto w-11/12 flex  flex-col md:flex-row justify-evenly mt-10'>
            <div>
                <h1 className='text-[#34485A] font-semibold text-2xl mb-5 text-center md:text-start'>Customer Tickets</h1>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
                
               {
                tickets.map(ticket => <SingleTicket key={ticket.id} ticket={ticket}
                  handleTaskList={handleTaskList}
                  taskList={taskList}
                  handleCompleteButton={handleCompleteButton}

                
                  
                ></SingleTicket>)
               }
            </div>
            </div>
            <div>
                <h1 className='text-center'>Task Status</h1>
                <div>
                       <div>
                   {
                    taskList.map(task =><SingleTask 
                        task={task}
                        handleCompleteButton={handleCompleteButton}
                        
                    
                    ></SingleTask> )
                   } 
                </div>
                </div>
                <div> 
                     <h1 className='text-center'>Resolved Task</h1>
                    <div>
                        {
                            resolvedTicket.map(ticket => <ResolvedTicket ticket={ticket}></ResolvedTicket>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;