import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function Customers({data}) {

    return ( 
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
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
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F34B23" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#F34B23" stopOpacity={0}/>
          </linearGradient>
        </defs>

          
          <XAxis padding={{left: 10, right: 10}} dataKey="period" axisLine={false} tickLine={false} tick={{fontSize: 12}}  />
          <YAxis padding={{top: 10, bottom: 10}} dataKey="newCustomers" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
          <Tooltip />
          <Area type="monotone"  dataKey="newCustomers" dataKeyType="number" fillOpacity={1} stackId="1" stroke="#F34B23" fill="url(#colorPv)" />
          <Area type="monotone" dataKey="newCustomersGrowthRate" dataKeyType="number" fillOpacity={1} stackId="1" stroke="#82ca9d" fill="url(#colorPv)"  />
        </AreaChart>
      </ResponsiveContainer>
    );
}

export default Customers;



