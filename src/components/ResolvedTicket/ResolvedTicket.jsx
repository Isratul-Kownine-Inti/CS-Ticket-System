import React from 'react';

const ResolvedTicket = ({ticket}) => {
    return (
           <div className="card w-full md:w-96 bg-blue-100 card-sm shadow-xl mt-5">
            <div className="card-body">
                <h2 className="card-title text-xl font-medium">{ticket.title}</h2>
               
            </div>
        </div>
    );
};

export default ResolvedTicket;