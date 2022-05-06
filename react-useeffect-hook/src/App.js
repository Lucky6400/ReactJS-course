import { useState, useEffect } from 'react';
import './App.css';
import AddFootballer from './components/AddFootballer';
import Content from './components/Content';
import Footer from './components/Reusables/Footer';
import Navbar from './components/Reusables/Navbar';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('footballers')) || []);

  const [newFootballer, setNewFootballer] = useState('');
  const [search, setSearch] = useState('');


  useEffect(() => {
    console.log("useEffect working")
  }); // this will work everytime the component will render

  useEffect(() => {
    console.log("useEffect 2nd method working")
  }, [])  // this will work only when the page is reloaded

  useEffect(() => {
    console.log("runs when a dependency state is changed")
  }, [items]) // this will run everytime we alter the state of items array
  
  /* useEffect is asynchronous */

  const addFootballer = (playername) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addedFootballer = { id, available: false, playername };
    const listItems = [...items, addedFootballer];
    setItems(listItems);
    localStorage.setItem('footballers', JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newFootballer) return;
    // add new footballer
    addFootballer(newFootballer)
    setNewFootballer('')
  }

  const [theme, setTheme] = useState("danger");

  const handleThemeChange = () => {
      setTheme("primary");
  }
  const setSuccessTheme = () => {
    setTheme("success");
  }
  return (
    <>
      <Navbar search={search} setSearch={setSearch} setSuccessTheme={setSuccessTheme} handleThemeChange={handleThemeChange}/>
      <AddFootballer
        newFootballer={newFootballer}
        setNewFootballer={setNewFootballer}
        handleSubmit={handleSubmit}
      />
      <Content 
      theme={theme}
      items={items.filter((item) => ((item.playername).toLowerCase()).includes(search.toLowerCase()))} 
      setItems={setItems} />
      <Footer />

    </>

  );
}

export default App;
