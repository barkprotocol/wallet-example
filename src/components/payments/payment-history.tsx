'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

interface PaymentHistoryProps {
  transactions: {
    id: string;
    date: string;
    amount: number;
    currency: string;
    status: string;
  }[];
}

export const PaymentHistory = ({ transactions }: PaymentHistoryProps) => {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <Card key={transaction.id} className="flex items-center justify-between p-4 shadow-md">
          <div>
            <p className="font-semibold">{transaction.date}</p>
            <p className="text-sm text-gray-600">{transaction.status}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">{transaction.amount} {transaction.currency}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
