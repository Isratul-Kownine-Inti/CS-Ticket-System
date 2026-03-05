
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import CustomerTickets from './components/CustomerTickets/CustomerTickets';
  import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer/Footer';


const fetchTickets = async () =>{
  const res = await fetch('tickets.json');
  return res.json();
}

const ticketsPromise = fetchTickets()
function App() {

  const[ taskList, setTaskList]= useState([]);
 const [resolvedTicket, setResolvedTicket] = useState([]);
//  const [ticketList, setTicketList] = useState([])  
 

    const handleTaskList = (ticket) =>{
      
      const isExist = taskList.find(customerTicket =>customerTicket.id === ticket.id)
      if(isExist)
      {
         toast("The ticket is already added!")
         return;
      }
      const newTaskList = ([...taskList,ticket]);
      setTaskList(newTaskList)
      // console.log(newTaskList)
       toast("Ticket Added!")
    }

    const handleCompleteButton = (ticket) =>{

      const updatedTaskList = taskList.filter(task => task.id !== ticket.id)
      setTaskList(updatedTaskList);

     
        const newResolvedTicket = ([...resolvedTicket,ticket])
        setResolvedTicket(newResolvedTicket)

        toast("Issue is resolved!")

    }

   
  return (
    <>
      
      <Navbar></Navbar>
        <Banner taskList={taskList} resolvedTicket={resolvedTicket}></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <CustomerTickets 
        ticketsPromise={ticketsPromise}
        handleTaskList={handleTaskList}
        taskList={taskList}
        resolvedTicket={resolvedTicket}
        handleCompleteButton={handleCompleteButton}
        

        ></CustomerTickets>
      </Suspense>
         <ToastContainer />
    
     <Footer></Footer>
    </>
  )
}

export default App
