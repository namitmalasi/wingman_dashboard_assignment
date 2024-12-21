import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const StatCard = ({ title, value, trend, icon: Icon }) => {
  const isPositive = trend > 0;
  const Arrow = isPositive ? ArrowUpRight : ArrowDownRight;
  const trendColor = isPositive ? "text-green-500" : "text-red-500";

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">{title}</span>
        <Icon className="h-4 w-4 text-gray-500" />
      </div>
      <div className="text-2xl font-bold mb-2">{value}</div>
      <div className={`flex items-center ${trendColor}`}>
        <Arrow className="h-4 w-4 mr-1" />
        <span className="text-sm">
          {Math.abs(trend)}% {isPositive ? "increase" : "decrease"}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
