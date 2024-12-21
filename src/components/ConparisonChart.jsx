import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const ComparisonChart = ({ data }) => (
  <div>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="period" />
        <Tooltip />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ComparisonChart;
