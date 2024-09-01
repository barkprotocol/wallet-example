'use client';

import React from 'react';
import { PaymentTransaction, PaymentSummary, PaymentMethod } from '@/types/payments';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatCurrency } from '@/utils';

// Component for displaying a single payment transaction
export const PaymentTransactionCard: React.FC<{ transaction: PaymentTransaction }> = ({ transaction }) => {
  return (
    <Card className="flex flex-col gap-4 p-4 shadow-lg">
      <div className="flex justify-between">
        <span className="font-semibold text-lg">Transaction ID: {transaction.id}</span>
        <span className={`text-sm ${transaction.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
          {transaction.status}
        </span>
      </div>
      <div className="flex justify-between">
        <span>Amount:</span>
        <span>{formatCurrency(transaction.amount, transaction.currency)}</span>
      </div>
      <div className="flex justify-between">
        <span>Date:</span>
        <span>{new Date(transaction.date).toLocaleDateString()}</span>
      </div>
      <div className="flex justify-between">
        <span>Payment Method:</span>
        <span>{transaction.method.name}</span>
      </div>
      {transaction.description && (
        <div>
          <span>Description:</span>
          <p>{transaction.description}</p>
        </div>
      )}
    </Card>
  );
};

// Component for displaying payment summary
export const PaymentSummaryCard: React.FC<{ summary: PaymentSummary }> = ({ summary }) => {
  return (
    <Card className="flex flex-col gap-4 p-4 shadow-lg">
      <div className="flex justify-between">
        <span className="font-semibold text-lg">Payment Summary</span>
      </div>
      <div className="flex justify-between">
        <span>Total Amount:</span>
        <span>{formatCurrency(summary.totalAmount, summary.currency)}</span>
      </div>
      <div className="flex justify-between">
        <span>Fee:</span>
        <span>{formatCurrency(summary.fee, summary.currency)}</span>
      </div>
      <div className="flex justify-between">
        <span>Net Amount:</span>
        <span>{formatCurrency(summary.netAmount, summary.currency)}</span>
      </div>
      <Progress value={(summary.fee / summary.totalAmount) * 100} />
    </Card>
  );
};

// Component for displaying a list of payment methods
export const PaymentMethodsList: React.FC<{ methods: PaymentMethod[] }> = ({ methods }) => {
  return (
    <div className="flex flex-col gap-4">
      {methods.map((method) => (
        <Card key={method.id} className="p-4 shadow-lg">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg">{method.name}</span>
            <span className="text-sm">{method.details}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};
