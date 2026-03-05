import React from 'react';
import './Banner.css'
import bannerImg from '../../assets/vector1.png'


const Banner = ({ taskList, resolvedTicket }) => {
    return (
        <div className='mx-auto w-11/12 mt-10  mb-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10  relative overflow-hidden'>
            <div className="card card-border h-64 bg-linear-to-r from-purple-700 to-purple-400 ">

                <div className='flex justify-between items-center gap-4'>
                    <img className='' src={bannerImg} alt="" />
                    <img className='' src={bannerImg} alt="" />
                </div>

                <div className="card-body card-content">
                    <h2 className="text-center text-white font-bold text-2xl">Progress</h2>
                    <p className='text-center text-white font-bold text-2xl'>{taskList.length}</p>


                </div>
            </div>
            <div className="card card-border   h-64 bg-linear-to-r from-green-300 to-green-700 ">

                <div className='flex justify-between'>
                    <img className='' src={bannerImg} alt="" />
                    <img className='' src={bannerImg} alt="" />
                </div>

                <div className="card-body card-content">
                    <h2 className="text-center text-white font-bold text-2xl">Resolved</h2>
                    <p className='text-center text-white font-bold text-2xl'>{resolvedTicket.length}</p>


                </div>
            </div>
        </div>


    );
};


export default Banner;


