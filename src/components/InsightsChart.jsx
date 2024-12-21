import {
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
} from "recharts";

const InsightsChart = ({ weeklyData }) => (
  <div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={weeklyData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="incoming"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="answered"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default InsightsChart;
