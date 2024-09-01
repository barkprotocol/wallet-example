import React from 'react';
import { PaymentHistory } from '@/types/payments';

interface PaymentListProps {
  history: PaymentHistory;
}

const PaymentList: React.FC<PaymentListProps> = ({ history }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Payment History</h2>
      <ul>
        {history.transactions.map(transaction => (
          <li key={transaction.id} className="border p-4 mb-4">
            <p>ID: {transaction.id}</p>
            <p>Amount: {transaction.amount} {transaction.currency}</p>
            <p>Status: {transaction.status}</p>
            <p>Date: {new Date(transaction.date).toLocaleString()}</p>
            <p>Description: {transaction.description}</p>
            <p>Method: {transaction.method.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
