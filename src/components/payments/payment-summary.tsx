'use client';

import React from 'react';
import { PaymentSummary } from '@/types/payments';
import { formatCurrency } from '@/lib/utils';

interface PaymentSummaryProps {
  summary: PaymentSummary;
}

const PaymentSummaryCard: React.FC<PaymentSummaryProps> = ({ summary }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Payment Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Total Amount:</span>
        <span>{formatCurrency(summary.totalAmount, summary.currency)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Fee:</span>
        <span>{formatCurrency(summary.fee, summary.currency)}</span>
      </div>
      <div className="flex justify-between">
        <span>Net Amount:</span>
        <span>{formatCurrency(summary.netAmount, summary.currency)}</span>
      </div>
    </div>
  );
};

export default PaymentSummaryCard;
