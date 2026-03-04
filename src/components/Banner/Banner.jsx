import React from 'react';
import vector1 from '../../assets/vector1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mx-auto w-11/12 mt-10 '>
            <div className="card card-border bg-base-100 w-96 gradient-repeat-card">
               
                <div className="card-body">
                 
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


