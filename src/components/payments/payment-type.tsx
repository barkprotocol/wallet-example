'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

interface PaymentType {
  id: string;
  type: string;
  description: string;
}

interface PaymentTypeProps {
  types: PaymentType[];
}

export const PaymentTypes = ({ types }: PaymentTypeProps) => {
  return (
    <div className="space-y-4">
      {types.map((paymentType) => (
        <Card key={paymentType.id} className="p-4 shadow-md">
          <h3 className="font-semibold text-lg">{paymentType.type}</h3>
          <p className="text-sm text-gray-600">{paymentType.description}</p>
        </Card>
      ))}
    </div>
  );
};
