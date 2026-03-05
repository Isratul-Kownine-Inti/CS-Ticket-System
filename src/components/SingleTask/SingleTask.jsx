import React from 'react';

const SingleTask = ({ task,handleCompleteButton }) => {
    console.log(task)
    return (
        <div className="card w-full md:w-96 bg-base-100 card-sm shadow-xl mt-5">
            <div className="card-body">
                <h2 className="card-title">{task.title}</h2>
                <div className="justify-end card-actions mt-2">
                    <button onClick={()=>handleCompleteButton(task)} className="btn w-full  bg-green-600 text-white">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;