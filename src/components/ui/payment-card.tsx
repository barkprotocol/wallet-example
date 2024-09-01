'use client';

import React from 'react';
import { Card } from '@/components/ui/card'; // Ensure this Card component is styled appropriately
import { PaymentMethod } from '@/types/payments'; // Import PaymentMethod type for TypeScript

interface PaymentCardProps {
  paymentMethod: PaymentMethod; // Payment method details
  amount: number; // Amount of the payment
  currency: string; // Currency of the payment
  status: 'pending' | 'completed' | 'failed'; // Status of the payment
}

const statusColors = {
  pending: 'bg-yellow-500 text-white',
  completed: 'bg-green-500 text-white',
  failed: 'bg-red-500 text-white',
};

export const PaymentCard: React.FC<PaymentCardProps> = ({ paymentMethod, amount, currency, status }) => {
  const statusClass = statusColors[status] || 'bg-gray-500 text-white'; // Fallback color if status is invalid

  return (
    <Card className="p-4 shadow-lg border rounded-lg bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">
          {paymentMethod.name} ({paymentMethod.type})
        </div>
        <div className={`py-1 px-3 rounded-md ${statusClass} text-xs font-medium`}>
          {status.charAt(0).toUpperCase() + status.slice(1)} {/* Capitalize the status */}
        </div>
      </div>
      <div className="text-sm text-gray-600">
        <div>Amount: {currency} {amount.toFixed(2)}</div>
        <div>Details: {paymentMethod.details}</div>
      </div>
    </Card>
  );
};
