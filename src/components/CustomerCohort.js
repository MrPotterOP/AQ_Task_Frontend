import React,{useState} from 'react';
import axios from 'axios';

import CustomersCohortChart from './Charts/CustomersCohartChart';


function CustomerCohort() {

    const [chartData, setChartData] = useState(null);


    const fetchData = () => {

        axios.get('http://localhost:8080/customerscohorts').then((response) => {
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
                <h2 className='chart-title'>Customers Cohort</h2>
            </div>


            <div className='chart-wrapper'>
                {chartData && <CustomersCohortChart data={chartData.clvByCohorts} />}
            </div>
            

            
        </div>
     );
}

export default CustomerCohort;