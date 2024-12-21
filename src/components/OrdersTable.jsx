const OrdersTable = ({ orders }) => (
  <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
    <table className="w-full min-w-full">
      <thead>
        <tr className="border-b">
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
            Product
          </th>
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
            Date
          </th>
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
            Time spent
          </th>
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
            Order Value
          </th>
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
            Commission
          </th>
          <th className="py-3 px-4 text-left text-sm font-medium text-gray-500"></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="border-b hover:bg-gray-50">
            <td className="py-3 px-4">
              <div className="flex items-center">
                <div className="h-10 w-10 flex-shrink-0">
                  <img
                    src="/api/placeholder/40/40"
                    alt={order.product}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">
                    {order.product}
                  </div>
                </div>
              </div>
            </td>
            <td className="py-3 px-4">
              <div>{order.date}</div>
              <div className="text-sm text-gray-500">{order.time}</div>
            </td>
            <td className="py-3 px-4">{order.timeSpent}</td>
            <td className="py-3 px-4">{order.orderValue}</td>
            <td className="py-3 px-4">{order.commission}</td>
            <td className="py-3 px-4">
              <button className="text-blue-500 hover:text-blue-700">
                View Chat
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OrdersTable;
