import React, { use } from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCircle } from "react-icons/fa";
import SingleTicket from '../SingleTicket/SingleTicket';

const CustomerTickets = ({ ticketsPromise }) => {
    const tickets = use(ticketsPromise)
    console.log(tickets)
    return (
        <div className='mx-auto w-11/12 flex flex-1 flex-col md:flex-row justify-between mt-10'>
            <div>
                <h1 className='text-[#34485A] font-semibold text-2xl mb-5 text-center md:text-start'>Customer Tickets</h1>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
                
               {
                tickets.map(ticket => <SingleTicket key={ticket.id} ticket={ticket}></SingleTicket>)
               }
            </div>
            </div>
            <div>
                <h1>Taks manager</h1>

            </div>
        </div>
    );
};

export default CustomerTickets;