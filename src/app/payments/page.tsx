// app/payments/page.tsx

import React from 'react';
import PaymentForm from './payment-form';
import { getPaymentHistory, getPaymentSummary } from '@/services/paymentService';
import { PaymentHistory, PaymentSummary } from '@/types/payments';

const PaymentsPage: React.FC = async () => {
  const history: PaymentHistory = await getPaymentHistory();
  const summary: PaymentSummary = await getPaymentSummary();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <PaymentForm /> {/* Your form for making payments */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Payment Summary</h2>
        <p>Total Amount: {summary.totalAmount} {summary.currency}</p>
        <p>Fee: {summary.fee} {summary.currency}</p>
        <p>Net Amount: {summary.netAmount} {summary.currency}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Payment History</h2>
        <ul>
          {history.transactions.map(transaction => (
            <li key={transaction.id}>
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
    </div>
  );
};

export default PaymentsPage;
