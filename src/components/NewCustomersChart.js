import React,{useState, useRef} from 'react';
import axios from 'axios';

import Customers from './Charts/Customers';


function NewCustomersChart() {

    const [chartData, setChartData] = useState(null);

    const period = useRef({current: "monthly"});


    const fetchData = () => {

        axios.get('https://aq-task-backend.onrender.com/newcustomers?period=' + period.current.value).then((response) => {
            setChartData(response.data);
        }).catch((error) => {
            console.log(error);
            setChartData("Error");
        });
    }


    if (!chartData) {
        fetchData();
    }

    return ( 
        <div className="sales-chart">
            
            <div className='chart-head'>
                <h2 className='chart-title'>New Customers Added Over Time</h2>

                <select ref={period} onChangeCapture={fetchData} className="btn-dropdown">
                
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option defaultValue="daily" selected="selected" value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>

                </select>
            </div>


            <div className='chart-wrapper'>
                {chartData && <Customers data={chartData.newCustomers} />}
            </div>
            

            
        </div>
     );
}

export default NewCustomersChart;