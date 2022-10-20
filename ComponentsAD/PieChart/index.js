import "./styles.css";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

export default function PieChartComponent({ classNameWrapper, data, outerRadius, legend }) {
    const renderLegend = (props) => {
        const { payload } = props;
        let legendIconType = '';
        const result = payload.reduce((unique, o) => {
            if (!unique.some(obj => obj.value === o.value && obj.type === o.type)) {
                unique.push(o);
            }
            return unique;
        }, []);

        return (
            <div className="container-fluid mb-3">
                <div className="row">
                </div>
                <div className="row">
                    <ul className="row row-cols-3 g-0">
                        {result.map((entry, index) => {
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
            </div>
        );
    }

    return (
        <>
            <div className={classNameWrapper}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={data}
                            cx="50%"
                            cy="50%"
                            fill="#8884d8"
                            label
                            outerRadius={outerRadius}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        {legend && <Legend verticalAlign="top" align="right" content={renderLegend} />}
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}
