import React from 'react';
import { Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ComposedChart } from './../../../node_modules/recharts/es6/chart/ComposedChart';

const data = [
    { name: "A ", value: 200 },
    { name: "b ", value: 600 },
    { name: "c ", value :1200 },
    { name: "d ", value: 500 },
    { name: "e ", value: 400 }
];

const Charts = () => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={data}>
                    <XAxis dataKey={name}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Area type="monotone" dataKey="value" stroke='transparent' fill="blue" ></Area>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;