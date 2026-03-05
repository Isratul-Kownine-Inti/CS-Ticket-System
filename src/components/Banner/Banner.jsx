import React from 'react';
import vector1 from '../../assets/vector1.png'
import './Banner.css'

const Banner = ({ taskList, resolvedTicket }) => {
    return (
        <div className='mx-auto w-11/12 mt-10  mb-10 flex justify-between items-center'>
            <div className="card card-border w-96 h-64 overflow-hidden relative z-0">
                <figure>
                    <img src="/public/vector1.png" alt="Banner" className="object-cover w-full h-full" />
                </figure>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-200 opacity-70 rounded-lg z-10"></div>

                <div className="card-body z-20">
                    <h2 className="card-title">Progress</h2>
                    <p>{taskList.length}</p>

                </div>
            </div>

            <div className="card card-border bg-base-100 w-96">
                <div className="card-body">
                    <h2 className="card-title">Resolve</h2>
                    <p>{resolvedTicket.length}</p>

                </div>
            </div>
        </div>


    );
};


export default Banner;


