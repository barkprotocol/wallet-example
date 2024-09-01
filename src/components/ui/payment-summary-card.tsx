// src/components/ui/payment-summary-card.tsx

import React from 'react';
import { PaymentSummary } from '@/types/payments';
import { formatCurrency } from '@/utils/formatCurrency';

interface PaymentSummaryCardProps {
  summary: PaymentSummary;
}

const PaymentSummaryCard: React.FC<PaymentSummaryCardProps> = ({ summary }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white">
      <h2 className="text-xl font-semibold">Payment Summary</h2>
      <div className="mt-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Total Amount:</span>
          <span className="font-semibold">{formatCurrency(summary.totalAmount, summary.currency)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-500">Fee:</span>
          <span className="font-semibold">{formatCurrency(summary.fee, summary.currency)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-500">Net Amount:</span>
          <span className="font-semibold">{formatCurrency(summary.netAmount, summary.currency)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummaryCard;
