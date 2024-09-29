import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { MdDashboard } from 'react-icons/md';


function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const defaultGroup = localStorage.getItem('selectedGroup');
  const defaultOrder = localStorage.getItem('selectedOrder');

  const [group, setGroup] = useState(defaultGroup ? defaultGroup : 'status');
  const [order, setOrder] = useState(defaultOrder ? defaultOrder : 'priority');


  const handleGroupChange = (groupSelected) => {
    setGroup(groupSelected);
    localStorage.setItem("selectedGroup", groupSelected);
  }
  const handleOrderChange = (orderSelected) => {
    setOrder(orderSelected);
    localStorage.setItem("selectedOrder", orderSelected);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.log("Unable to fetch data! ", error);
    }
  }

  return (
    <div className="App scroll-container">
      <Navbar group={group} order={order} onGroupchange={handleGroupChange} onOrderChange={handleOrderChange} />

    </div>
  );
}

export default App;
