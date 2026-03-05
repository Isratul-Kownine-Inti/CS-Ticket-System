import React from 'react';

const SingleTask = ({ task,handleCompleteButton }) => {
    console.log(task)
    return (
        <div className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{task.title}</h2>
                <div className="justify-end card-actions">
                    <button onClick={()=>handleCompleteButton(task)} className="btn btn-primary">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;