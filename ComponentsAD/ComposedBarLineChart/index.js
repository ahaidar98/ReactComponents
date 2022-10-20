import React from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import './styles.css';

export default function ComposedBarLineChart({ dataArr, classNameWrapper, title, filterType }) {
    const renderLegend = (props) => {
        const { payload } = props;
        let legendIconType = '';
        
        return (
            <div className="row centerFlexBoxWItems mb-3 chartLegend g-0">
                <nav className="nav nav-pills nav-justified">
                    <h4 className="col-12 col-lg-12 mb-0  ms-xl-0">{title}</h4>
                    <ul className="list-group list-group-horizontal">
                        {payload.map((entry, index) => {
                            legendIconType = `${entry.type}-legendIcon`;
                            const legendIcon = entry.type === 'line' ?
                                <div className={legendIconType} style={{ border: `2px solid ${entry.color}` }} />
                                : <div className={legendIconType} style={{ backgroundColor: entry.color }} />;

                            return (
                                <li className="legendItem list-group-item" key={`item-${index}`}>
                                    {legendIcon}
                                    {entry.value}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            
        );
    }
    return (
        <div className={classNameWrapper}>
            <ResponsiveContainer>
                <ComposedChart data={dataArr}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="profileName" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" align="right" content={renderLegend} />

                    <Bar dataKey="value" stackId="a" barSize={25} fill="#413ea0" name="Actual Hours" />
                    {/*<Bar dataKey="pastLayupQuantity" stackId="a" barSize={25} fill="orange" name="Engineering Hours" />*/}
                    {/*<Line type="monotone" dataKey="totAvg" stroke="#ff7300" name="Total Average" />*/}
                    <Line type="monotone" dataKey="runningAvg" stroke="#a8df37" name="Running Average" />
                    <Scatter dataKey="pastLayupQuantity" fill="red" name={`Previous ${filterType}'s Hours`} />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
