import React from 'react';

const ResolvedTicket = ({ticket}) => {
    return (
           <div className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{ticket.title}</h2>
               
            </div>
        </div>
    );
};

export default ResolvedTicket;