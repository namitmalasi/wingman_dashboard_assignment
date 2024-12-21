import { ArrowUpRight } from "lucide-react";

const Forecast = () => (
  <div className="bg-emerald-500 p-6 rounded-lg text-white">
    <div className="flex items-center mb-2">
      <span className="text-2xl font-bold">+15%</span>
      <ArrowUpRight className="h-4 w-4 ml-1" />
    </div>
    <p className="text-sm">
      forecasted increase in your sales closed by the end of the current month
    </p>
  </div>
);

export default Forecast;
