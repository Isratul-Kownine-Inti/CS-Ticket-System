import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div className='bg-black h-full'>
              <footer className="footer  sm:footer-horizontal  p-10 mt-10 text-white">
            <aside>

                <p className=' w-full md:w-52 font-bold '>
                 <span className='text-xl '>   CS-Ticket System</span>
                    
                    <br />
                  <p className=' text-justify text-gray-400 font-medium mt-2'>  CS Ticket System provides a simple and effective way to handle customer queries, track issues, and ensure faster resolutions.It helps support teams stay organized and deliver better customer service.
                    Manage tickets easily and improve response time with a smooth workflow.</p>
               </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover  text-gray-400">Products & Services</a>
                <a className="link link-hover  text-gray-400">Customer Stories</a>
                <a className="link link-hover  text-gray-400">Download Apps</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover  text-gray-400">About us</a>
                <a className="link link-hover  text-gray-400">Our Mission</a>
                <a className="link link-hover  text-gray-400">Contact Saled</a>
                
            </nav>
            <nav>
                <h6 className="footer-title">Information</h6>
               
                <a className="link link-hover  text-gray-400">Privacy policy</a>
                <a className="link link-hover  text-gray-400">Terms & Conditions</a>
                 <a className="link link-hover  text-gray-400">Join Us</a>
            </nav>

               <nav>
                <h6 className="footer-title">Social Links</h6>
               
                <a className="link link-hover text-gray-400 flex justify-center items-center gap-1"> <FaXTwitter className='bg-white rounded-full p-1 text-xl text-black' />@CS — Ticket System</a>
                <a className="link link-hover  text-gray-400 flex justify-center items-center gap-1"><FaLinkedin className='bg-white rounded-full p-1 text-xl text-black' />@CS — Ticket System</a>
                 <a className="link link-hover  text-gray-400 flex justify-center items-center gap-1"> <FaFacebook className='bg-white rounded-full p-1 text-xl text-black' />@CS — Ticket System</a>
                 <a className="link link-hover  text-gray-400 flex justify-center items-center gap-1"><MdEmail className='bg-white rounded-full p-1 text-xl text-black' />support@cst.com</a>
            </nav>
    
        </footer>
       <footer>
         <hr className='border border-white text-center mx-10' />
         <p className=' font-semibold text-gray-400 text-center mt-5 pb-2'>© 2025 CS — Ticket System. All rights reserved.</p>
       </footer>
        </div>
    

         
        
    );
};

export default Footer;