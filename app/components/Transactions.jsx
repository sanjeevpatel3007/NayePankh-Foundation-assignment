import React from 'react';

const Transactions = () => {
  // Example transaction data
  const transactionData = [
    { id: 1, date: '2024-10-01', description: 'Payment to Vendor A', amount: '$200.00' },
    { id: 2, date: '2024-10-05', description: 'Payment from Client B', amount: '$500.00' },
    { id: 3, date: '2024-10-10', description: 'Payment to Vendor C', amount: '$150.00' },
    { id: 4, date: '2024-10-12', description: 'Refund from Client D', amount: '$75.00' },
    { id: 5, date: '2024-10-15', description: 'Payment to Vendor E', amount: '$300.00' },
  ];

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">Transactions</h2>
      <p className="mt-2 text-gray-600">View your transaction history here.</p>
      <table className="min-w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-4 border-b border-gray-300 text-left">ID</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left">Date</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left">Description</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map(transaction => (
            <tr key={transaction.id} className="hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-300">{transaction.id}</td>
              <td className="py-3 px-4 border-b border-gray-300">{transaction.date}</td>
              <td className="py-3 px-4 border-b border-gray-300">{transaction.description}</td>
              <td className="py-3 px-4 border-b border-gray-300 font-semibold">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
