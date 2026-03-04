
import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import CustomerTickets from './components/CustomerTickets/CustomerTickets';


const fetchTickets = async () =>{
  const res = await fetch('tickets.json');
  return res.json();
}

const ticketsPromise = fetchTickets()
function App() {

  return (
    <>
      
      <Navbar></Navbar>
      <Suspense>
        <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
      </Suspense>
      {/* <Banner></Banner> */}
    
     
    </>
  )
}

export default App
