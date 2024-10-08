import './App.css';

import React,{useState, useEffect} from 'react';

import axios from 'axios';

import SalesChart from './components/SalesChart';
import NewCustomersChart from './components/NewCustomersChart';
import RepeatCustomers from "./components/RepeatCustomers";
import WorldMap from "./components/WorldMap";
import CustomersCohortChart from './components/Charts/CustomersCohartChart';

function App() {


    const [chartData, setChartData] = useState(null);


    const fetchData = () => {

        axios.get('https://aq-task-backend.onrender.com/customerscohorts').then((response) => {
            setChartData(response.data);
        }).catch((error) => {
            console.log(error);
            setChartData("Error");
        });
    }

    useEffect(() => {
        fetchData();
    }, []);





  return (
    <div className="App">
      <div className="dashboard">
          <div className="navigation">
              <div className="user">
                  <div className="profile-picture">
                      <img src="https://i.pinimg.com/564x/4c/60/42/4c6042228823e4a4657dc30425955222.jpg" alt="shubham"/>
                  </div>
                  <div className="user-info">
                    <div className="name">Shubham Ub.</div>
                    <div className="email">shubham@example.com</div>
                  </div>
              </div>

              <div className="menu">

                  <div className="menu-search">
                      <img src="https://img.icons8.com/?size=80&id=TQPOC8XaUqZ0&format=png&color=000000" alt="search"></img>
                      <input type="text" placeholder="Search"/>
                  </div>

                  <div className='menu-items'>
                      <div className='menu-item active'>
                          <img src="https://img.icons8.com/?size=50&id=1iF9PyJ2Thzo&format=png&color=000000" alt="home"></img>
                          <span>Dashboard</span>
                      </div>

                      <div className='menu-item'>
                            <img src="https://img.icons8.com/?size=50&id=J715ns61u5eV&format=png&color=000000" alt="accounts"></img>
                            <span>Accounts</span>
                      </div>

                      <div className='menu-item'>
                            <img src="https://img.icons8.com/?size=50&id=UTiCMwCZMhqu&format=png&color=000000" alt="transactions"></img>
                            <span>Transactions</span>
                      </div>



                      <div className='menu-item'>
                          <img src="https://img.icons8.com/?size=50&id=2969&format=png&color=000000" alt="settings"></img>
                          <span>Settings</span>
                      </div>

                      <div className='menu-item'>
                          <img src="https://img.icons8.com/?size=50&id=60964&format=png&color=000000" alt="settings"></img>
                          <span>Invoice</span>
                      </div>

                      <div className='menu-item'>
                          <img src="https://img.icons8.com/?size=50&id=59732&format=png&color=000000" alt="settings"></img>
                          <span>Cards</span>
                      </div>

                  </div>


              </div>

          </div>

          <main>

                <div className={(chartData === null) ? "loading-screen" : "loading-screen hidden"}>
                    <div className="loader"></div>

                    <p>We are using a shared free hosting solution at backend, it may take upto 50 seconds at first to spin up the server</p>
                </div>

              <div className="header">
                  <div className='welcome'>
                      <p>Hey, Shubham</p>
                      <span>Welcome</span>
                  </div>

                  <div className='date-btns'>
                      <button className="btn-dropdown">
                          <span>All time</span>
                          <img src="https://img.icons8.com/?size=60&id=85123&format=png&color=000000" alt="dropdown"></img>
                      </button>

                      <button className='btn-primary'>
                        <span>Export</span>
                      </button>
                  </div>


              </div>

              <div className="content">

                  <div className="top-charts">
                      <div className="sales-chart-box">
                          <SalesChart />
                      </div>

                      <div className="sales-chart-box">
                          <NewCustomersChart />
                      </div>

                      <div className="sales-chart-box">
                        <RepeatCustomers />
                      </div>

                      <div className="sales-chart-box">
                        {/* <CustomerCohort /> */}

                        <div className="sales-chart">
                            <div className='chart-head'>
                                <h2 className='chart-title'>Customers Cohort</h2>
                            </div>
                            <div className='chart-wrapper'>
                                {chartData && <CustomersCohortChart data={chartData.clvByCohorts} />}
                            </div>
                        </div>
                      </div>

                      <div className="sales-chart-box">
                        <h2 className='chart-title'>Customers Around The Cities</h2>
                        <WorldMap />
                      </div>




                  </div>

              </div>
          </main>
      </div>
    </div>
  );
}

export default App;


