import React from 'react';
import {  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Area, Tooltip, Cell } from 'recharts';
import Moodlog from './MoodLog';


    const Graph = (props) => {
        if (!props.diaryEntries) return null;
            const data = props.diaryEntries.map (
                (diaryEntry) => {
                    return (
                      {
                        dateTime : diaryEntry.dateTime, 
                        mood : diaryEntry.mood,
                        moodBar : diaryEntry.mood, 
                        note: diaryEntry.text
                      }
                    )
                }
            ) 

    return (
        <>
        <h1>Your mood diary</h1>
        <Moodlog diaryEntries={props.diaryEntries}/>

        <h1>Your mood in time</h1>
        <ComposedChart
            layout="vertical"
            width={320}
            height={250}
            data={data}
            margin={{
            top: 50, right: 20, bottom: 20, left: 20,
            }}
        >
            <defs>
                <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" domain={[0, 5]} dataKey="x" tick={false}/>
            <YAxis dataKey="dateTime" type="category" />
            <Tooltip/>

            <Area type="monotone" dataKey="mood" stroke="#8884d8" fillOpacity={1} fill="url(#colorMood)" />
            <Bar dataKey="moodBar" barSize={20} fill="#413ea0">
                {
                    data.map((entry) => (
                        <Cell fill={entry.moodBar < 2 
                            ? '#d41002' // red
                            : entry.moodBar < 3
                                ? '#d48402' //orange
                                : entry.moodBar < 4
                                    ? '#d4bb02'  //yellow
                                    : entry.moodBar < 5
                                    ? '#70a827'  //green
                                    : '#24a0ed' }/> //blue
                   ))
                }
            </Bar>
        </ComposedChart>
    
        </>
    );
}
    
export default Graph;
