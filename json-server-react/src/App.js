import { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Content from './components/Content';
import Footer from './components/Reusables/Footer';
import Navbar from './components/Reusables/Navbar';

function App() {

  const [items, setItems] = useState([]);

  const [newFootballer, setNewFootballer] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  const API_URL = 'http://localhost:3500/tasks'

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL); // getting response from the server
        const tasks = await response.json(); // converting the response into json format
        setItems(tasks);
        // console.log(tasks)
      } catch (error) {
        console.error(error.stack);
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      fetchTasks();
    }, 3000);

  }, []);

  const addFootballer = (task) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addedFootballer = { id, done: false, task };
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
      <Navbar search={search} setSearch={setSearch} setSuccessTheme={setSuccessTheme} handleThemeChange={handleThemeChange} />
      <AddTask
        newFootballer={newFootballer}
        setNewFootballer={setNewFootballer}
        handleSubmit={handleSubmit}
      />
      <main>
        
        {/*                             BELOW IS AN EXAMPLE OF CONDITIONAL RENDERING                      */}

        {
          isLoading &&
          <h5 className="col-lg-3 text-center bg-dark rounded-2 p-2 m-auto text-white">
            <div className="w-100">
              <div className="spinner-border text-danger" role="status"></div>
            </div>
            Your tasks are loading, please wait...
          </h5>
        }

        {/*************************************************************************************************/}


        <Content
          theme={theme}
          items={items.filter((item) => ((item.task).toLowerCase()).includes(search.toLowerCase()))}
          setItems={setItems} />
      </main>

      <Footer />

    </>

  );
}

export default App;
