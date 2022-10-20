import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './styles.css';

export default function BarGraph({ dataArr, name, isGraphVertical, classNameWrapper, title, formatter }) {
    const isVertical = isGraphVertical ? 'vertical' : 'horizontal';
    const renderLegend = (props) => {
        const { payload } = props;
        let legendIconType = '';

        return (
            <div className="row centerFlexBoxWItems mb-3">
                <ul className="col-4 text-end ps-0">
                    {payload.map((entry, index) => {
                        legendIconType = `${entry.type}-legendIcon`;
                        const legendIcon = entry.type === 'line' ?
                            <div className={legendIconType} style={{ border: `2px solid ${entry.color}` }} />
                            : <div className={legendIconType} style={{ backgroundColor: entry.color }} />;

                        return (
                            <li className="legendItem" key={`item-${index}`}>
                                {legendIcon}
                                {entry.value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    console.log(dataArr)


    return (
        <div className={classNameWrapper}>
            <ResponsiveContainer>
                <BarChart data={dataArr}  margin={{ top: 0, right: 0, bottom: 0, left: -25 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
