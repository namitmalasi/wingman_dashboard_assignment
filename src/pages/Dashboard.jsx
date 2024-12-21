import { useState } from "react";
import StatCard from "../components/StatCard";
import { DollarSign, Percent, PhoneCall, ShoppingCart } from "lucide-react";
import InsightsChart from "../components/InsightsChart";
import ComparisonChart from "../components/ConparisonChart";
import Forecast from "../components/Forecast";
import OrdersTable from "../components/OrdersTable";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7days");

  // Fake data
  const weeklyData = [
    { day: "Mon", incoming: 30, answered: 25, expertsOnline: 5 },
    { day: "Tue", incoming: 35, answered: 28, expertsOnline: 6 },
    { day: "Wed", incoming: 40, answered: 32, expertsOnline: 7 },
    { day: "Thu", incoming: 45, answered: 38, expertsOnline: 5 },
    { day: "Fri", incoming: 38, answered: 30, expertsOnline: 6 },
    { day: "Sat", incoming: 32, answered: 25, expertsOnline: 4 },
    { day: "Sun", incoming: 30, answered: 24, expertsOnline: 5 },
  ];

  const comparisonData = [
    { period: "This week", value: 20 },
    { period: "Last week", value: 15 },
  ];

  const ordersData = Array(4)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      product: "Product Name...",
      date: "24 Apr '2024",
      time: "10:24 AM",
      timeSpent: "2h 5m",
      orderValue: "$120.21",
      commission: "$55",
    }));

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">At a glance</h1>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="border rounded-md px-3 py-2"
        >
          <option value="7days">7 days</option>
          <option value="30days">30 days</option>
          <option value="90days">90 days</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="CONSULTATIONS"
          value="24"
          trend={15}
          icon={PhoneCall}
        />
        <StatCard
          title="ORDERS PLACED"
          value="12"
          trend={-15}
          icon={ShoppingCart}
        />
        <StatCard title="CONVERSION" value="50%" trend={-15} icon={Percent} />
        <StatCard
          title="TOTAL SALES VALUE"
          value="$2,400"
          trend={15}
          icon={DollarSign}
        />
      </div>

      {/* Insights Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-6">Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <InsightsChart weeklyData={weeklyData} />
          </div>
          <div className="space-y-6">
            <ComparisonChart data={comparisonData} />
            <Forecast />
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Orders</h2>
        <OrdersTable orders={ordersData} />
      </div>
    </div>
  );
};

export default Dashboard;
