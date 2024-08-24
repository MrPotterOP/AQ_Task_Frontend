import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function Sales({data}) {

    return ( 
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >

          
          <XAxis padding={{left: 10, right: 10}} dataKey="period" axisLine={false} tickLine={false} tick={{fontSize: 12}}  />
          <YAxis padding={{top: 10, bottom: 10}} dataKey="repeatCustomers" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
          <Tooltip />
          <Line type="monotone" dot={false} dataKey="repeatCustomers" dataKeyType="number" fillOpacity={1} stackId="1" stroke="#F34B23" strokeWidth={2}  />
          <Line type="monotone" dataKey="growthRate" dataKeyType="number" fillOpacity={1} stackId="1" stroke="#82ca9d"  />
        </LineChart>
      </ResponsiveContainer>
    );
}

export default Sales;



