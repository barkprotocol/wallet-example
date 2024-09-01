'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card'; // Ensure this is correctly implemented
import { Button } from '@/components/ui/button'; // Ensure this is correctly implemented

interface PaymentFormProps {
  onSubmit: (paymentData: { amount: number; currency: string; method: string }) => void;
}

export const PaymentForm = ({ onSubmit }: PaymentFormProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('SOL');
  const [method, setMethod] = useState<string>('Credit Card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ amount, currency, method });
  };

  return (
    <Card className="p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Make a Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
            placeholder="Enter amount"
            required
          />
        </div>
        <div>
          <label htmlFor="currency" className="block text-sm font-medium mb-1">
            Currency
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="SOL">SOL</option>
            <option value="USDC">USDC</option>
            <option value="BARK">BARK</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="method" className="block text-sm font-medium mb-1">
            Payment Method
          </label>
          <select
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cryptocurrency">Cryptocurrency</option>
            {/* Add more payment methods as needed */}
          </select>
        </div>
        <Button type="submit" className="w-full">Submit Payment</Button>
      </form>
    </Card>
  );
};
