import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

const SalesChart = (props) => {

    const data = [
        { month: "Jan", sales: 4000, lastYear: 3500 },
        { month: "Feb", sales: 3200, lastYear: 3000 },
        { month: "Mar", sales: 5100, lastYear: 4500 },
        { month: "Apr", sales: 4700, lastYear: 4200 },
        { month: "May", sales: 6200, lastYear: 5000 },
        { month: "Jun", sales: 7100, lastYear: 6000 },
        { month: "Jul", sales: 6800, lastYear: 5800 },
        { month: "Aug", sales: 7200, lastYear: 6400 },
        { month: "Sep", sales: 8000, lastYear: 7000 },
        { month: "Oct", sales: 8500, lastYear: 7500 },
        { month: "Nov", sales: 9000, lastYear: 8000 },
        { month: "Dec", sales: 10000, lastYear: 9000 }
    ];

    return (
        <div>
            <h5 style={{ marginTop: '40px', marginTop: '40px' }}>{props.title}</h5>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="lastYear"
                        stroke="#94a3b8"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesChart;