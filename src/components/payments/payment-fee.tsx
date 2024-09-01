'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

interface PaymentFeeProps {
  amount: number;
  feePercent: number; // Fee percentage
}

export const PaymentFee = ({ amount, feePercent }: PaymentFeeProps) => {
  const fee = (amount * feePercent) / 100;
  const totalAmount = amount + fee;

  return (
    <Card className="p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Payment Fee</h2>
      <div className="space-y-4">
        <div>
          <span className="font-semibold">Amount:</span> {amount}
        </div>
        <div>
          <span className="font-semibold">Fee ({feePercent}%):</span> {fee}
        </div>
        <div>
          <span className="font-semibold">Total Amount:</span> {totalAmount}
        </div>
      </div>
    </Card>
  );
};
