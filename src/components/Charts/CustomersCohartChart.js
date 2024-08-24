import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function CustomersCohortChart({data}) {

    return ( 
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F34B23" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#F34B23" stopOpacity={0}/>
          </linearGradient>
        </defs>

          
          <XAxis padding={{left: 10, right: 10}} dataKey="cohortMonth" axisLine={false} tickLine={false} tick={{fontSize: 12}}  />
          <YAxis padding={{top: 10, bottom: 10}} dataKey="totalCLV" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
          <Tooltip />
          <Bar type="monotone"  dataKey="totalCLV" dataKeyType="number" fillOpacity={1} stackId="1" stroke={false} fill="url(#colorPv)" />

        </BarChart>
      </ResponsiveContainer>
    );
}

export default CustomersCohortChart;



