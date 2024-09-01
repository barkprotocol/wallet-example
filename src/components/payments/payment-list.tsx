'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

interface PaymentListProps {
  payments: {
    id: string;
    date: string;
    amount: number;
    currency: string;
    method: string;
    status: string;
  }[];
}

export const PaymentList = ({ payments }: PaymentListProps) => {
  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <Card key={payment.id} className="flex items-center justify-between p-4 shadow-md">
          <div>
            <p className="font-semibold">{payment.date}</p>
            <p className="text-sm text-gray-600">Method: {payment.method}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">{payment.amount} {payment.currency}</p>
            <span className={`px-2 py-1 text-xs rounded ${payment.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {payment.status}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};
